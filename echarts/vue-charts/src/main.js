import Vue from 'vue'
import App from './App.vue'

// import VueECharts from 'vue-echarts'
// Vue.component('v-chart', VueECharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
