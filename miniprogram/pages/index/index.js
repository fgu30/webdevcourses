const app = getApp()

Page({
  onLoad() {
    // this.data.greeting = app.appData.userinfo
    // this.setData({})
    
    // app.changeData()
    // this.setData({
    //   greeting:  app.appData.userinfo
    // })
  },

  data: {
    greeting: 'hello',
    app
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
  }
})