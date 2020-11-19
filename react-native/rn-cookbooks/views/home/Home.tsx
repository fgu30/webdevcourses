import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'

import Swiper from './Swiper'

import styles from './styleHome'

import HotCate from './HotCate'

import Top10 from './Top10'

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.indexWraper}>
        <Swiper></Swiper>
        <HotCate></HotCate>
        <Top10></Top10>
      </ScrollView>
    )
  }
}