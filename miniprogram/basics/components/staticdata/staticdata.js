// components/staticdata/staticdata.js
Component({
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    abc: 0,
    _abc: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      this.setData({
        abc: 100,
        _abc: 200
      })
    }
  },

  observers: {
    _abc(value) {
      console.log(value)
    }
  },

  ready() {
    this.handleTap()
    console.log(this.data)
  }
})
