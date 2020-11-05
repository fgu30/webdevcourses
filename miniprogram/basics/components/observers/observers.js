// components/observers/observers.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: 'hello'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    x: 0,
    y: {
      a: {
        b: {
          c: 1000
        }
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      this.setData({
        x: 100
      })
      this.setData({
        y: {
          a: {
            b: {
              c: 100000
            }
          }
        }
      })
    }
  },

  observers: {
    'x, title'(value1, value2) {
      // console.log(value1)
      // console.log(value2)
    },

    'y.a.**'(value) {
      console.log(value)
    }
  }
})
