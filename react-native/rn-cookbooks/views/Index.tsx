import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TabBar from '@ant-design/react-native/lib/tab-bar'
import { ImageStyle } from './styledIndex'

import cookbook from '../assets/images/cookbook.png'
import cookbookActive from '../assets/images/cookbook-active.png'
import category from '../assets/images/menu.png'
import categoryActive from '../assets/images/menu-active.png'
import map from '../assets/images/location.png'
import mapActive from '../assets/images/location-active.png'
import more from '../assets/images/more.png'
import moreActive from '../assets/images/more-active.png'

import Home from './home/Home'
import Category from './category/Category'
import Map from './home/Map'

interface Props {
  navigation: any
}

interface State {
  selectedTab: string
}

export default class Index extends Component<Props, State> {
  state: State = {
    selectedTab: 'home'
  }

  onChangeTab = (tab: string, title: string) => {
    return () => {
      this.props.navigation.setOptions({
        title
      })
      this.setState({
        selectedTab: tab
      })
    }
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#000"
        barTintColor="#f5f5f5"
      >
        <TabBar.Item
          title="美食大全"
          key='cookbook'
          icon={<ImageStyle source={cookbook} />}
          selectedIcon={<ImageStyle source={cookbookActive} />}
          selected={this.state.selectedTab === 'home'}
          onPress={this.onChangeTab('home', '美食大全')}
        >
          <Home {...this.props}></Home>
        </TabBar.Item>
        <TabBar.Item
          icon={<ImageStyle source={category} />}
          key='category'
          selectedIcon={<ImageStyle source={categoryActive} />}
          title="热门分类"
          selected={this.state.selectedTab === 'category'}
          onPress={this.onChangeTab('category', '热门分类')}
        >
          <Category></Category>
        </TabBar.Item>
        <TabBar.Item
          key="map"
          icon={<ImageStyle source={map} />}
          selectedIcon={<ImageStyle source={mapActive} />}
          title="地图"
          selected={this.state.selectedTab === 'map'}
          onPress={this.onChangeTab('map', '地图')}
        >
          <Map></Map>
        </TabBar.Item>
        <TabBar.Item
          key="more"
          icon={<ImageStyle source={more} />}
          selectedIcon={<ImageStyle source={moreActive} />}
          title="更多"
          selected={this.state.selectedTab === 'more'}
          onPress={this.onChangeTab('more', '更多')}
        >
          <View><Text>more</Text></View>
        </TabBar.Item>
      </TabBar>
    )
  }
}
