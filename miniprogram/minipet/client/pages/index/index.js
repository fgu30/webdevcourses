Page({
  data: {
    longitude: 0,
    latitude: 0,
    markers: []
  },

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

  // 获取用户当前的位置
  onLoad() {
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

    // 定义map context 静态属性
    this.mapctx = wx.createMapContext('map')

  },
  
  onShow() {
    this.loadData()
  },

  handleImageTap() {
    this.mapctx.moveToLocation()
  },

  handlePublishTap() {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  }

})