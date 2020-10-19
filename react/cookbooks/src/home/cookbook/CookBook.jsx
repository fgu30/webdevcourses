import React, { Component } from 'react'

import {
  Container
} from './StyledCookBook'

import Swiper from './Swiper'
import Search from '@c/search/Search'

export default class CookBook extends Component {
  render() {
    return (
      <Container>
        <header>美食大全</header>
        <Swiper></Swiper>
        <Search></Search>
      </Container>
    )
  }
}
