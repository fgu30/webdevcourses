Component({
  data: {
    longitude: 0,
    latitude: 0,
    markers: []
  },

  lifetimes: {
    ready() {
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          let {longitude, latitude} = res
          this.setData({
            longitude,
            latitude
          })
        }
      })
    }
  },

  pageLifetimes: {
    show() {
      this.loadData()
    }
  },

  methods: {
    loadData() {
      // 拉取数据
      wx.request({
        url: 'http://walter666.cn/server/index.php/trade/get_list',
        method: 'GET',
        success: (res) => {
          let markers = res.data.data.map(value => {
            let { id, latitude, longitude, type} = value
            return {
              id,
              latitude,
              longitude,
              iconPath: '/resources/' + (type === 'buy' ? 'buy.png' : 'sell.png'),
              width: 40,
              height: 40
            }
          })
  
          this.setData({
            markers
          })
        }
      })
    },

    handleImageTap() {
      // console.log(this.mapctx)
       // 定义map context 静态属性
      let mapctx = wx.createMapContext('map')

      mapctx.moveToLocation()
    },
  
    handlePublishTap() {
      wx.navigateTo({
        url: '/components/publish/publish',
      })
    }
  }
})