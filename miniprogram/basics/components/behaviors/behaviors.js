const myBehavior = require('./myBehavor')
Component({
  behaviors: [myBehavior],

  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes: {
    attached() {
      console.log('component attached.')
      console.log(this.data.x)

      this.show()
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    x: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide() {
      console.log('hide')
    }
  }
})
