import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  double(state) {
    return state.count * 2
  }
}

const mutations = {
  increment(state) {
    state.count++
  },

  add100(state, num) {
    state.count += num
  }
}

const actions = {
  increment({commit}) {
    return new Promise(resovle => {
      setTimeout(() => {
        commit('increment')
        resovle()
      }, 1000)
    })
  },

  async add100({commit, dispatch}) {
    await dispatch('increment')
    setTimeout(() => {
      commit('add100', 100)
    }, 1000)
  }
}

const store = new Store({
  state,
  mutations,
  actions,
  getters
})

export default store