import React, { Component } from 'react'
import { Consumer, Provider, testContext } from './testContext'

class ChildA extends Component {
  static contextType = testContext

  render() {
    return (
      <div>child a: {this.context}</div>
    )
  }
}

class ChildB extends Component {
  render() {
    return (
      <div>
        <ChildC></ChildC>
      </div>
    )
  }
}

const ChildD = function(props) {
  return (
    <div>ChildC
      <Consumer>
        {
          (value) => {
            return <div>{value}</div>
          }
        }
      </Consumer>
    </div>
  )
}

const ChildC = function(props) {
  return (
    <div>
      <ChildD></ChildD>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <Provider value="hello">
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    )
  }
}
