App({
  appData: {
    userinfo: 'xuemei'
  },

  changeData() {
    this.appData.userinfo = 'wangchao'
  },

  onLaunch(opt) {
    console.log(opt)
  },

  // onShow() {
  //   console.log('onShow')
  // },

  // onHide() {
  //   console.log('onHide')
  // }
})