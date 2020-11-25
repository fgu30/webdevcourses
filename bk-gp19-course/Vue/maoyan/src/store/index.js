import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

const store = new Store({
  state: {
    city: '北京',
    cityId: 1,
    scrollTop: 0
  },

  mutations: {
    setCity(state, city) {
      let { nm, id } = city 
      state.city = nm
      state.cityId = id
    },

    setScrollTop(state, pos) {
      state.scrollTop = pos
    }
  },

  actions: {
    changeCityName({commit}, city) {
      commit('setCity', city)
    },

    changeScrollTop({commit}, pos) {
      commit('setScrollTop', pos)
    }
  }
})

export default store