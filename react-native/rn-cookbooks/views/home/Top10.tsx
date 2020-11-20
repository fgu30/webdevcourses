import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Grid } from '@ant-design/react-native'

import { observer, inject } from 'mobx-react'

import styles from './styleHome'

// const data = {
//   "ret": true,
//   "data": 
// }

import { Store } from '../../store/Swiper'
// import Swiper from 'react-native-swiper'

interface Props {
  store: Store,
  navigation: any
}

@inject('store')
@observer
export default class Top10 extends Component<Props> {
  _renderItem(el: any) {
    return (
      <View style={styles.top10ItemContainer}>
        <View style={styles.top10ImgContainer}>
          <Image style={styles.Top10Img} source={{uri: el.img}}></Image>
        </View>
        <View style={styles.top10DesContainer}>
          <Text style={styles.top10Title}>{el.name}</Text>
          <Text style={styles.Top10Desc}>{el.all_click} {el.favorites}</Text>
        </View>
    </View>
    )
  }

  _handlePress = (item: any) => {
    this.props.navigation.navigate('Detail', {
      name: item.name
    })
  }

  render() {
    return (
      <View style={styles.top10Container}>
        <View style={styles.top10Head}>
          <Text style={styles.top10HeadText}>精品好菜</Text>
        </View>
        <View>
          {
            <Grid
              data={this.props.store.list.slice(0, 10)}
              columnNum={2}
              hasLine={false}
              renderItem={this._renderItem}
              onPress={this._handlePress}
            ></Grid>
          }
        </View>
      </View>
    )
  }
}