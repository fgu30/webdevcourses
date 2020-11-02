const app = getApp()

const { reverse } = require('../../utils/tools')

Page({
  onLoad(opt) {
    // this.data.greeting = app.appData.userinfo
    // this.setData({})
    
    // app.changeData()
    // this.setData({
    //   greeting:  app.appData.userinfo
    // })

    console.log(opt)
  },

  onReady() {
    console.log('onReady')

    console.log(reverse('我爱我'))
  },

  data: {
    greeting: 'hello',
    app,
    title: 'hello',
    id: 0,
    show: true,
    list: ['a', 'b', 'c']
  },

  handleClick() {
    // this.setData({
    //   greeting: this.data.greeting + ' world'
    // })
    app.changeData()
    // this.setData({
    //   greeting:  app.appData.userinfo
    // })
  },

  handleGotoClick() {
    wx.navigateTo({
      url: '/pages/profile/profile',
    })
  },

  onShow() {
    console.log('onPageShow')
  },

  onHide() {
    console.log('onoPageHide')
  },

  onPullDownRefresh() {
    console.log('refresh')
  },

  onReachBottom() {
    console.log('onReach')
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/index/index'
    }
  },

  onResize() {

  },

  onTabItemTap() {
    console.log('tap')
  }
  
})