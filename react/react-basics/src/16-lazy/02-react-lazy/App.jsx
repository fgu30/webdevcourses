import React, { Component, lazy, Suspense } from 'react'

const Child = lazy(() => import('./Child'))

export default class App extends Component {
  state = {
    show: false
  }

  handleClick = () => {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>show</button>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          {
            this.state.show && <Child></Child>
          }
        </Suspense>
      </div>
    )
  }
}
