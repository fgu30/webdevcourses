import { createStore, applyMiddleware } from 'redux'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const initialState = Immutable.Map()

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)

sagas.forEach(saga => sagaMiddleware.run(saga))

export default store