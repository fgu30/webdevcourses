import React, { Component } from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import styles from './style_cate'

interface Props {
  store?: any
}

interface State {
  refresh: boolean,
  pageNo: number
}

let pageSize = 10

@inject('store')
@observer
export default class Cate extends Component<Props, State> {
  state: State = {
    refresh: false,
    pageNo: 1
  }

  _renderItem = (el: any) => {
    let { img, name, burdens, all_click, favorites } = el.item
    return (
      <TouchableOpacity
        onPress={() => {}}
      >
        <View style={styles.listWrap}>
          <View style={styles.imgWrap}>
            <Image style={styles.image} source={{uri: img}}></Image>
          </View>
          <View style={styles.descWrap}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle} numberOfLines={1}>{burdens}</Text>
            <Text style={styles.desc}>{all_click} {favorites}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  handleRefresh = () => {
    this.setState({
      refresh: true
    })

    setTimeout(() => {
      this.setState({
        refresh: false
      })
    }, 1000)
  }

  handleEndReached = () => {
    // console.log(0)
    // this.setState((state) => {
    //   return {
    //     pageNo: state.pageNo + 1
    //   }
    // })
  }

  render() {
    return (
      <View style={styles.flatListWrap}>
        <FlatList
          refreshing={this.state.refresh}
          onRefresh={this.handleRefresh}
          renderItem={this._renderItem.bind(this)}
          data={this.props.store?.slicedList(pageSize, this.state.pageNo)}
          keyExtractor={(item: any, index: number) => item.id + index}
          onEndReached={this.handleEndReached}
          onEndReachedThreshold={5}
        ></FlatList>
      </View>
    )
  }
}
