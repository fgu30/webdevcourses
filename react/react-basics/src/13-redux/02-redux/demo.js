const { createStore } = require('redux')

const reducer = require('./reducer')

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState().count)
})

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })

// setInterval(() => {
//   store.dispatch({
//     type: 'increment'
//   })
//   console.log(store.getState().count)
// }, 1000)
