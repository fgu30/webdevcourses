import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

import { DECREMENT } from './mutationTypes'

const store = new Store({
  state: {
    count: 0
  },

  getters: {
    double(state) {
      return state.count * 2
    },
    
    calculate: state => num => state.count * num
    
  },

  // 纯函数：无副作用的函数
  // 1、给定参数，返回预期的结果
  // 2、不能做异步操作
  // 3、不能修改入参
  mutations: {
    increment(state) {
      state.count += 1
    },
    [DECREMENT](state, value) {
      state.count -= value
    },
    add100(state, num) {
      state.count += num
    },
    add10000(state) {
      state.count += 10000
    }
  },

  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000) 
    },

    add100({commit}, num) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('add100', num)
          resolve()
        }, 1000)
      })
    },

    async add10000({dispatch, commit}) {
      await dispatch('add100', 100)
      setTimeout(() => {
        commit('add10000')
      }, 500)
    }
  }

})


export default store