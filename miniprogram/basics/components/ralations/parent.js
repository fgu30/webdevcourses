// components/ralations/parent.js
Component({
  relations: {
    './child': {
      type: 'descendant',
      linked(target) {
        // console.log(target.data.child)
      }
    },
    './childhood': {
      type: 'descendant'
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
    parent: 'parent'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
