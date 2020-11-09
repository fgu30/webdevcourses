import React, { Component } from 'react'
import { Map } from '@tarojs/components'

import A from '@/pages/list/A'

export default class SwanMap extends Component {
  render() {
    return (
      <>
        <Map
          rotate={0}
          latitude="40.119895"
          longitude="116.286799"
          showLocation={true}
        ></Map>
        <A></A>
      </>
    )
  }
}
