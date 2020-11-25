const state = {
  items: []
}

const getters = {
  total(state) {
    return state.items.reduce((sum, value) => {
      return sum + value.quantity * value.price
    }, 0)
  }
}

const mutations = {
  setItems(state, product) {
    let {id, name, price} = product
    let p = state.items.find(value => value.id === id)
    if (p) {
      p.quantity++
    } else {
      state.items.push({
        id, // 产品id
        name,
        price,
        quantity: 1
      })
    }
  }
}

const actions = {
  addToCart({commit, dispatch}, product) {
    commit('setItems', product)
    // dispatch product decrement
    dispatch('product/decrement', product.id, {root: true})
  }
}

export default {
  // 命名空间
  namespaced: true,
  
  state,
  mutations,
  actions,
  getters
}