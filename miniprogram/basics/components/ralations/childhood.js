// components/ralations/childhood.js
Component({
  relations: {
    './parent': {
      type: 'ancestor',
      linked(target) {
        console.log(target.data.parent)
      }
    },
    './child': {
      type: 'ancestor',
      linked(target) {
        console.log(target.data.child)
      }
    }
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
