import { createStore, applyMiddleware } from 'redux'

import reducer from './reducer'

import m1 from './middlewares/m1'
import m2 from './middlewares/m2'

// import thunk from 'redux-thunk'

// 中间一旦挂上，dispatch 就会被中间件拦下来
const middleware = applyMiddleware(m1, m2)

const store = createStore(reducer, middleware)

export default store