import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { observer, inject } from 'mobx-react'

import { Store } from '../../store/Swiper'

interface Props {
  store: Store
}

@inject('store')
@observer
export default class HomeSwiper extends Component<Props> {
  render() {
    return (
      <View style={styles.wrapper}>
        <Swiper showsButtons={true}>
          {
            this.props.store.list.slice(0,3).map(value => {
              return (
                <View style={styles.slide1} key={value.title}>
                  <Image style={{width: '100%', height: 200}} source={{uri: value.img}}></Image>
                </View>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})