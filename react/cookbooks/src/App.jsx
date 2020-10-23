import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Home } from './home/'
import List from './list/List'
import Detail from './detail/Detail'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    )
  }
}