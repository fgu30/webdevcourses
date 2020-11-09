import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Map } from '@tarojs/components'
import VirtualList from '@tarojs/components/virtual-list'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

import {
  HelloWorld
} from './linaria'

import WeappMap from '../../components/WeappMap'
import SwanMap from '../../components/SwanMap'

import { $ } from '@tarojs/extend'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页2'
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  onReady(){
    // console.log(100)
  }

  onPullDownRefresh() {
    // console.log(188)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentDidMount() {
    // console.log(process.env.TARO_ENV)
    console.log($('#count-num').text())
  }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <HelloWorld size="50px"><Text id="count-num">Hello, World ~~</Text></HelloWorld>
        {
          process.env.TARO_ENV === 'weapp' ? <WeappMap /> : <SwanMap />
        }
      </View>
    )
  }
}

export default Index

// const Row = React.memo(({ index, style, data }) => {
//   return (
//     <View className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
//       Row {index} : {data[index]}
//     </View>
//   );
// })


// function buildData (offset = 0) {
//   return Array(100).fill(0).map((_, i) => i + offset);
// }

// export default class Index extends Component {
//   state = {
//     data: buildData(0),
//   }

//   loading = false

//   listReachBottom() {
//     Taro.showLoading()
//     // 如果 loading 与视图相关，那它就应该放在 `this.state` 里
//     // 我们这里使用的是一个同步的 API 调用 loading，所以不需要
//     this.loading = true
//     setTimeout(() => {
//       const { data } = this.state
//       this.setState({
//         data: data.concat(buildData(data.length))
//       }, () => {
//         this.loading = false;
//         Taro.hideLoading()
//       })
//     }, 1000)
//   }

//   render() {
//     const { data } = this.state
//     const dataLen = data.length
//     const itemSize = 100

//     return (
//       <VirtualList
//         className='List'
//         height={500}
//         itemData={data}
//         itemCount={dataLen}
//         itemSize={itemSize}
//         width='100%'
//         onScroll={({ scrollDirection, scrollOffset }) => {
//           if (
//             // 避免重复加载数据
//             !this.loading &&
//             // 只有往前滚动我们才触发
//             scrollDirection === 'forward' &&
//             // 5 = (列表高度 / 单项列表高度)
//             // 100 = 滚动提前加载量，可根据样式情况调整
//             scrollOffset > ((dataLen - 5) * itemSize + 100)
//           ) {
//             this.listReachBottom()
//           }
//         }}
//       >
//         {Row}
//       </VirtualList>
//     );
//   }
// }