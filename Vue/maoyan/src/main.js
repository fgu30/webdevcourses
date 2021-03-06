// ES6 module
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// 屏蔽开发环境的提示
Vue.config.productionTip = false

// 引入全局样式
import './assets/reset.css'
import 'animate.css'

// 引入全局过滤器
import './filters'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
