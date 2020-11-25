import React, { Component } from 'react'
import Child from './Child'

export default class extends Component {
  render() {
    return (
      <>
        <h1>data</h1>
        <Child>
          <div>slots</div>
        </Child>
      </>
    )
  }
}