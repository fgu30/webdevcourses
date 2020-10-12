import React, { Component } from 'react'

import store from './store'

class App extends Component {
  decrement = () => {
    store.dispatch({type: 'decrement'})
  }

  increment = () => {
    store.dispatch({type: 'increment'})
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
          <span>{store.getState().count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;