const _ = require('underscore')

Component({

  /**
   * 页面的初始数据
   */
  data: {
    keywords: '',
    list: []
  },

  methods: {
    handleInput(e) {
      this.setData({
        keywords: e.detail.value
      })
    },
  
    handleTap: _.debounce(function() {
      wx.request({
        url: 'http://walter666.cn/server/index.php/trade/get_search_list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          keyword: this.data.keywords
        },
        success: (res) => {
          console.log(res)
          this.setData({
            list: res.data.data
          })
        }
      })
    }, 300)
  }
})