import React, { Component } from 'react'

import { Route, Link, Switch } from 'react-router-dom'

const Home = () => <div>Home</div>

const Rendering = () => <div>Rendering</div>
const Components = () => <div>Components</div>
const PropsState = () => <div>Props v. State</div>

const Topics = (props) => {
  let { url } = props.match
  return (
    <>
      <h1>Topics</h1>
      <hr/>
      <ul>
        <li><Link to={`${url}/rendering`}>Rendering</Link></li>
        <li><Link to={`${url}/components`}>Components</Link></li>
        <li><Link to={`${url}/propsstate`}>Props v. State</Link></li>
      </ul>
      <Route path={`${url}/rendering`} component={Rendering}></Route>
      <Route path={`${url}/components`} component={Components}></Route>
      <Route path={`${url}/propsstate`} component={PropsState}></Route>
    </>
  )
}

export default class Nesting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/topics/rendering">topics</Link></li>
        </ul>
        {/* 包容性路由 */}
        <Switch>
          {/* 排他性路由 */}
          <Route path="/topics" component={Topics}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    )
  }
}
