import React, { Component } from 'react'

import Modal from './Modal'

export default class App extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    console.log(0)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <Modal></Modal>
      </div>
    )
  }
}
