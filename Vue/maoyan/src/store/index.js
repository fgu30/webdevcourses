import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

const store = new Store({
  state: {
    city: '北京',
    cityId: 1
  },

  mutations: {
    setCity(state, city) {
      let { nm, id } = city 
      state.city = nm
      state.cityId = id
    }
  },

  actions: {
    changeCityName({commit}, city) {
      commit('setCity', city)
    }
  }
})

export default store