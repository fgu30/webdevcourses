import Button from './Button.js'
Button()

import Form from './Form.js'
Form()

import Item from './Item.js'
Item()

import List from './List.js'
List()

export default function() {
  const vm = new Vue({
    el: '#root',
    data: {
      list: []
    },
    methods: {
      handleReceiveContent(content) {
        this.list.push({
          id: new Date().getTime(),
          content
        })
      }
    },

    // 父组件 mounted 后调用。因为子组价渲染完毕，才表明父组件渲染完毕。
    mounted() {
      console.log('parent mounted')
    },

    created() {
      console.log('parent created.')
    },

    updated() {
      console.log('parent updated.')
    },
  })
}