import React, { Component } from 'react'

import img from '../assets/images/QQ20201017-0.png'

export default class Movie extends Component {
  render() {
    return (
      <div>
        <img width="200" height="200" src={img} alt=""/>
      </div>
    )
  }
}
