import React, { Component } from 'react'

export default class State extends Component {
  // state属性
  state = {
    isShow: true
  }

  // 构造函数
  // constructor(props) {
  //   // 调用了父类构造函数
  //   super(props)

  //   this.state = {
  //     isShow: true
  //   }
  // }

  render() {
    return (
      <div>
        {
          this.state.isShow && <div>state</div>
        }
      </div>
    )
  }
}
