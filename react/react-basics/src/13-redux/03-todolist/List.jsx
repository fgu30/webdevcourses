import React, { Component } from 'react'

import { connect } from 'react-redux'

// 映射State到当前组件的Props上
const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

@connect(mapStateToProps)
class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map((value, index) => {
            return <li key={index}>{value}</li>
          })
        }
      </ul>
    )
  }

  componentDidMount() {
    // console.log(this)
  }
}

// 这个connect方法第一次调用的返回值是个高阶组件
export default List
