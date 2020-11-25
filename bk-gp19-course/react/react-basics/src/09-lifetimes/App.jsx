import React, { Component } from 'react'

import Child from './Child'

class App extends Component {
  // initialization
  // 最先执行，只执行一次，一定会执行
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      color: 'red'
    }

    this.staticState = {
      z: 2
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

  }

  // mounting
  UNSAFE_componentWillMount() {
    this.staticState = {
      z: 3
    }
    // console.log('UNSAFE_componentWillMount')
  }

  render() {
    // 父组件render执行，子组件render一定执行

    // console.log('render')
    // console.log(this.staticState.z)
    
    return (
      <div>
        <Child title={this.state.x} color={this.state.color}></Child>
      </div>
    )
  }

  componentDidMount() {
    // console.log('parent did mount')
    setTimeout(() => {
      this.setState({
        x: new Date().getTime(),
        color: 'green'
      })
    }, 2000)
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
  }
}

export default App;