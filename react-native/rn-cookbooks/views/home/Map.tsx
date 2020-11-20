import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default class Map extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://map.baidu.com/search/%E9%AD%94%E9%94%85%E5%9D%8A%E9%BA%BB%E8%BE%A3%E9%A6%99%E9%94%85(%E6%B2%99%E6%B2%B3%E5%BA%97)/@12747837.155,4395167.24,19z?querytype=s&da_src=shareurl&wd=%E9%AD%94%E9%94%85%E5%9D%8A%E9%BA%BB%E8%BE%A3%E9%A6%99%E9%94%85(%E6%B2%99%E6%B2%B3%E5%BA%97)&c=131&src=0&wd2=%E9%82%A2%E5%8F%B0%E5%B8%82%E6%B2%99%E6%B2%B3%E5%B8%82&pn=0&sug=1&l=19&b=(12945602.595,4860397.8;12946442.595,4860871.8)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=1d1b45becd8b686cf1193788&device_ratio=2' }}
        style={{ marginTop: 20 }}
      />
    )
  }
}
