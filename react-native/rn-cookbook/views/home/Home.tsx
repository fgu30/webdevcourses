import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Swiper from './Swiper'

import styles from './styleHome'

import HotCate from './HotCate'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.indexWraper}>
        <Swiper></Swiper>
        <HotCate></HotCate>
      </View>
    )
  }
}