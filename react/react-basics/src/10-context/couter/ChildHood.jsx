import React, { Component } from 'react'

import { CountConsumer } from './Count'
import { Consumer as ShowConsumer } from './showContext'

export default class ChildHood extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {
            ({count, increment, decrement}) => {
              return (
                <>
                  <div>
                    <button onClick={() => decrement(2)}>-</button>
                  </div>
                  <ShowConsumer>
                    {
                      (value) => (
                        <div>{count} / {value.show}</div>
                      )
                    }
                  </ShowConsumer>
                  <div>
                    <button onClick={() => increment(3)}>+</button>
                  </div>
                </>
              )
            }
          }
          
        </CountConsumer>
      </div>
    )
  }
}
