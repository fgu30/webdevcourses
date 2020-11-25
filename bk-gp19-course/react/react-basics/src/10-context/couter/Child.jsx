import React, { Component } from 'react'

import { CountConsumer } from './Count'
import ChildHood from './ChildHood'

export default class Child extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {
            ({count}) => <div>{count}</div>
          }
        </CountConsumer>
        <ChildHood></ChildHood>
      </div>
    )
  }
}
