import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store/'

import App from './App'

import '@a/styles/animate.css'
import './assets/styles/reset.css'
// import 'animate.css'

import jsapi from '@u/jsapi'

;(async ()=>{
  // await jsapi()
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App></App>
      </Provider>
    </Router>,
    document.querySelector('#root')
  )
})()

