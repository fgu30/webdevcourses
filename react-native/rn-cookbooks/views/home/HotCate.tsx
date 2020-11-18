import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Grid } from '@ant-design/react-native'

import styles from './styleHome'

interface State {
  hotCate: Object[]
}

interface Props {

}

export default class HotCat extends Component<Props, State> {
  state: State = {
    hotCate: []
  }

  _renderItem() {
    return (
      <View
        style={styles.container}
      >
        {/* <Image source={{uri: ''}} style={styles.gridImg}></Image> */}
        <Text style={styles.gridText}></Text>
      </View>
    )
  }

  _onPress = () => {

  }

  render() {
    return (
      <View style={styles.hotCateGridWrap}>
        {/* <Grid
          data={this.state.hotCate}
          renderItem={this._renderItem}
          hasLine={false}
        ></Grid> */}
        <View><Text>aaa</Text></View>
      </View>
    )
  }
}