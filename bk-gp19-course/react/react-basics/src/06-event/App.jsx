import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    // 只做一次
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    count: 0
  }

  // 事件柯里化
  handleClick = (args) => {
    return (event) => {
      console.log(event.target)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick('abc')}>click</button>
      </div>
    )
  }
}
