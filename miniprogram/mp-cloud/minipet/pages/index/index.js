Page({
  data: {
    longitude: 0,
    latitude: 0,
    markers: [
      {
        height: 40,
        iconPath: "../../resources/buy.png",
        id: "d52d5a735fab93cc0071f6d276e63daa",
        latitude: 40.22077,
        longitude: 116.23128,
        width: 40,
      },
      {
        height: 40,
        iconPath: "../../resources/buy.png",
        id: "2fd465895fab942c008547e034af94fa",
        latitude: 40.220221,
        longitude: 116.23242,
        width: 40
      }
    ]
  },

  loadData() {
    // 拉取数据
    // wx.request({
    //   url: 'http://walter666.cn/server/index.php/trade/get_list',
    //   method: 'GET',
    //   success: (res) => {
    //     let markers = res.data.data.map(value => {
    //       let { id, latitude, longitude, type} = value
    //       return {
    //         id,
    //         latitude,
    //         longitude,
    //         iconPath: '/resources/' + (type === 'buy' ? 'buy.png' : 'sell.png'),
    //         width: 40,
    //         height: 40
    //       }
    //     })

    //     this.setData({
    //       markers
    //     })
    //   }
    // })

    const that = this

    const db = wx.cloud.database()

    db.collection('minipet').where({})
      .get({
        success: function(res) {
          // res.data 是包含以上定义的两条记录的数组
          // console.log(res.data)

          let markers = res.data.map(value => {
            let { _id, latitude, longitude, type} = value
            return {
              id: _id,
              latitude,
              longitude,
              iconPath: '../../resources/' + (type === 'buy' ? 'buy.png' : 'sell.png'),
              width: 40,
              height: 40
            }
          })
          console.log(markers)

          that.setData({
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
  },

  handleSearchTap() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }

})