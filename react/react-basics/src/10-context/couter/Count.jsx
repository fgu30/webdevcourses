import React, { Component, createContext } from 'react'

const {
  Provider,
  Consumer: CountConsumer
} = createContext({
  count: 100,
  increment: () => { console.log(0) },
  decrement: () => { console.log(1) }
})

class CountProvider extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  state = {
    count: 0
  }

  increment(args) {
    this.setState(state => ({
      count: state.count + args
    }))
  }

  decrement(args) {
    this.setState(state => ({
      count: state.count - args
    }))
  }

  render() {
    return (
      <Provider value={{
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  CountProvider,
  CountConsumer
}

