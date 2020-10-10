import React, { Component } from 'react'

const hoc = (Comp) => {
  return class extends Component {
    render() {
      return (
        <Comp title="hello" {...this.props}></Comp>
      )
    }
  }
}

export default hoc