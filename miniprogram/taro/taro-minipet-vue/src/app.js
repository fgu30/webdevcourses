import Vue from 'vue'
import store from './store'

import './app.less'

import 'taro-ui-vue/dist/style/components/tag.scss'

// Vue.config.productionTip = false

const App = new Vue({
  store,
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
