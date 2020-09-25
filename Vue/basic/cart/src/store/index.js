import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import product from './modules/products'
import cart from './modules/cart'

export default new Vuex.Store({
  modules: {
    product,
    cart
  }
})
