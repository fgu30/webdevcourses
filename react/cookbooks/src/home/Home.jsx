import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import animate from '@h/animate'

import {
  TabBar
} from 'antd-mobile'

import cookbook from '@a/images/cookbook.png'
import cookbookActive from '@a/images/cookbook-active.png'

import menu from '@a/images/menu.png'
import menuActive from '@a/images/menu-active.png'

import location from '@a/images/location.png'
import locationActive from '@a/images/location-active.png'

import more from '@a/images/more.png'
import moreActive from '@a/images/more-active.png'

import { CookBook } from './cookbook/'
import { Category } from './category/'
import { More } from './more/'
import Map from './map/Map'

import { actionCreator as ac } from '@/home/category'

const Home = (props) => {
  
  const state = useSelector(state => state)

  let [tabs, setTabs] = useState({
    selectedTab: state.getIn(['category', 'routeInfo', 'selectedTab']),
    hidden: false,
    fullScreen: true,
  })

  let dispatch = useDispatch()

  const tabItems = [
    <TabBar.Item
      title="美食大全"
      key="cookbook"
      icon={<div style={{
        width: '26px',
        height: '26px',
        background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
      />
      }
      selectedIcon={<div style={{
        width: '26px',
        height: '26px',
        background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
      />
      }
      selected={tabs.selectedTab === 'cookbook'}
      onPress={() => {
        setTabs({
          selectedTab: 'cookbook',
        })
      }}
    >
      <CookBook></CookBook>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menu}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="分类"
      key="category"
      selected={tabs.selectedTab === 'category'}
      onPress={() => {
        // this.setState({
        //   selectedTab: 'category',
        // })
        setTabs({
          selectedTab: 'category',
        })
        dispatch(ac.changeSelectedTab('category'))
      }}
    >
      <Category></Category>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${location}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="美食地图"
      key="map"
      selected={tabs.selectedTab === 'map'}
      onPress={() => {
        setTabs({
          selectedTab: 'map',
        });
      }}
    >
      <Map></Map>
    </TabBar.Item>,
    <TabBar.Item
      icon={{ uri: more }}
      selectedIcon={{ uri: moreActive }}
      title="更多"
      key="more"
      selected={tabs.selectedTab === 'more'}
      onPress={() => {
        setTabs({
          selectedTab: 'more',
        });
      }}
    >
      <More></More>
    </TabBar.Item>
  ]

  return (
    <div style={{ position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#000"
        barTintColor="white"
        hidden={tabs.hidden}
        prerenderingSiblingsNumber={Infinity}
      >
        {
          state.getIn(['home', 'checked'])
            ? tabItems.map(v => v)
            : tabItems.filter( (v,i) => i !== 2)
        }
      </TabBar>
    </div>
  )
}

export default animate(Home)