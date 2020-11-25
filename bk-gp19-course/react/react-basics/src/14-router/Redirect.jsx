import React, { Component } from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>About</div>
    )
  }
}

const Home = (props) => (<div>Home</div>)


export default class extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">home</NavLink> | &nbsp;
        <NavLink to="/about">about</NavLink>

        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Redirect from="/" to="/home"></Redirect>
      </div>
    )
  }
}
