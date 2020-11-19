import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Grid } from '@ant-design/react-native'

import http from '../../utils/http'

import styles from './styleHome'

interface State {
  hotCate: Object[]
}

interface Props {

}

interface Items {
  img: string,
  title: string
}

export default class HotCat extends Component<Props, State> {
  state: State = {
    hotCate: []
  }

  _renderItem(items: any) {
    return (
      <View
        style={styles.container}
      >
        {items.img !== '' && <Image source={{uri: items.img}} style={styles.gridImg}></Image>}
        <Text style={styles.gridText}>{items.title}</Text>
      </View>
    )
  }

  _onPress = () => {

  }

  async componentDidMount() {
    let result = await http({
      url: 'https://maguangzhao.cn/public/api/dianping/getHotCate',
      method: 'GET'
    })
    this.setState({
      hotCate: [
        ...result.data,
        {
          title: '更多',
          img: ''
        }
      ]
    })
  }

  render() {
    return (
      <View style={styles.hotCateGridWrap}>
        <Grid
          data={this.state.hotCate}
          renderItem={this._renderItem}
          hasLine={false}
        ></Grid>
      </View>
    )
  }
}