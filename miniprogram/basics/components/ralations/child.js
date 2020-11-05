// components/ralations/child.js
Component({
  relations: {
    // './parent': {
    //   type: 'ancestor',
    //   linked: (target) => {
    //     // console.log(target.data.x)
    //   }
    // },
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
    child: 'child'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
