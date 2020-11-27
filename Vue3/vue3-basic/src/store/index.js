import { createStore } from 'vuex'

export default createStore({
  state: {
    list: ['aaa']
  },
  mutations: {
    setList(state, list) {
      state.list = list
    },
    delList(state, index) {
      state.list.splice(index, 1)
    }
  },
  actions: {
    loadData({commit}) {
      fetch('/list.json')
        .then(response => response.json())
        .then(result => {
          commit('setList', result)
        })
    }
  },
  modules: {
  }
})
