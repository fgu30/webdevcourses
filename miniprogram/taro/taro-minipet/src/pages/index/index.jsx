import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

import Home from '@/components/home/Home'

export default class Index extends Component {
  render() {
    return (
      <Home></Home>
    )
  }
}
