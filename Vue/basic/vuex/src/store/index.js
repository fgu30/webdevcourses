import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

const store = new Store({
  state: {
    count: 0
  },

  // 纯函数：无副作用的函数
  // 1、给定参数，返回预期的结果
  // 2、不能做异步操作
  // 3、不能修改入参
  mutations: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count--
    }
  },

  actions: {
    increment({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000) 
    }
  }
})

export default store