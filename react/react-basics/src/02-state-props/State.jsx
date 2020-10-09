import React, { Component } from 'react'

export default class State extends Component {
  // state属性
  state = {
    isShow: true,
    count: 0,
    list: ['a', 'b', 'c']
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
          this.state.isShow && <div>state {this.state.count}</div>
        }
        <ul>
          {
            this.state.list.map(value => {
              return (
                <li key={value}>{value}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  componentDidMount() {
    // setTimeout(() => {
      // this.state.isShow = !this.state.isShow
      // this.setState({})
      // this.setState(prevState => {
      //   return {
      //     count: prevState.count + 1
      //   }
      // }, () => {
      //   console.log(document.querySelector('#root').innerHTML)
      // })
      // this.setState({
      //   count: 1
      // })
    // }, 3000)

    this.state.list.push('d')
    this.setState({})
    // this.forceUpdate()

    // this.setState({
    //   list: []
    // })
  }
}
