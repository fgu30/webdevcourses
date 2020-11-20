import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { inject, observer } from 'mobx-react'

import Swiper from './Swiper'

import styles from './styleHome'

import HotCate from './HotCate'

import Top10 from './Top10'

interface Props {
  store: any,
  navigation: any
}

@inject('store')
@observer
export default class Home extends Component<Props> {
  componentDidMount() {
    this.props.store.setList()
  }
  
  render() {
    return (
      <ScrollView style={styles.indexWraper}>
        <Swiper {...this.props}></Swiper>
        <HotCate></HotCate>
        <Top10 {...this.props}></Top10>
      </ScrollView>
    )
  }
}