import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store/'

import App from './App'

import './assets/styles/reset.css'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector('#root')
)