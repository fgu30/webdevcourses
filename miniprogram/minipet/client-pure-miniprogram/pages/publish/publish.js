// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '点击选择，请勾选哦~',

    isSubmit: false,
    isSucc: false
  },

  onLoad() {
    this.staticData = {
      type: 'buy'
    }
  },

  handleAddressTap() {
    wx.chooseLocation({
      success: (res) => {
        let { address, latitude, longitude } = res

        this.setData({
          address: address
        })

        this.staticData.longitude = longitude
        this.staticData.latitude = latitude
      }
    })
  },

  handleRadioChange(e) {
    this.staticData.type = e.detail.value
  },

  handleContactInput(e) {
    this.staticData.contact = e.detail.value
  },

  handleMessageInput(e) {
    this.staticData.message = e.detail.value
  },

  handleSubmitTap() {

    if (this.data.address === '点击选择，请勾选哦~') {
      wx.showToast({
        title: '请选择地址',
        icon: 'loading',
        duration: 1500
      })
      return  
    }
    if (!this.staticData.message) {
      wx.showToast({
        title: '请填写说明',
        icon: 'loading',
        duration: 1500
      })
      return  
    }
    if (!this.staticData.contact) {
      wx.showToast({
        title: '请填写联系方式',
        icon: 'loading',
        duration: 1500
      })
      return  
    }

    wx.request({
      url: 'http://walter666.cn/server/index.php/trade/add_item', //仅为示例，并非真实的接口地址
      data: {
        address: this.data.address,
        ...this.staticData
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        if (res.data.ret) {
          this.setData({
            isSubmit: true,
            isSucc: true
          })
        } else {
          this.setData({
            isSubmit: true,
            isSucc: false
          })
        }
      }
    })
  },

  handleBackTap() {
    wx.navigateBack()
  },

  handleRepublishTap() {
    this.setData({
      isSubmit: false
    })
  }
})