import React, { Component } from 'react'
import {
  View,
  Map,
  CoverImage,
  Navigator
} from '@tarojs/components'

import Taro from '@tarojs/taro'

import './home.less'

import center from '@/assets/center.png'
import pin from '@/assets/pin.png'

class Home extends Component {
  state = {
    longitude: 0,
    latitude: 0,
    markers: []
  }

  componentDidMount() {
    Taro.getLocation({
      type: 'wgs84',
      success: (res) => {
        let {longitude, latitude} = res
        this.setState({
          longitude,
          latitude
        })
      }
    })

    // 定义map context 静态属性
    this.mapctx = Taro.createMapContext('map')
  }

  render() {
    return (
      <View class="map-container">
        <Map
          id="map" 
          class="map"
          longitude={this.state.longitude} 
          latitude={this.state.latitude}
          markers={this.state.markers}
          show-location
        >
          <CoverImage
            class="center"
            src={center}
            bindtap="handleImageTap"
          ></CoverImage>
          <CoverImage
            class="pin"
            src={pin}
            bindtap="handleImageTap"
          >
          </CoverImage>
        </Map>
        <View class="nav">
          <Navigator class="publish" url="/pages/publish/Publish" openType="navigate">发布</Navigator>
          <View class="search">搜索</View>
        </View>
      </View>
    );
  }
}

export default Home