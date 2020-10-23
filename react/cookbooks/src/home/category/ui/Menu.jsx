import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import MenuList from '@c/menu/MenuList'

import {get} from '@u/http'

@withRouter
class Menu extends Component {
  static propTypes = {
    type: PropTypes.string
  }

  state = {
    cate: null,
    type: 'category',
    curCate: this.props.type === 'category' ? '热门' : '肉类'
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.type === preState.type) {
      return null
    } else {
      return {
        curCate: nextProps.type === 'category' ? '热门' : '肉类',
        type: nextProps.type
      }
    }
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/category'
    })

    this.setState({
      cate: result.data.data
    })
  }
  
  handleAsideClick = (curCate) => {
    return () => {
      this.setState({
        curCate
      })
    }
  }

  handleGotoList = (title) => {
    return () => {
      this.props.history.push('/list', { title })
    }
  }

  render() {
    return (
      <MenuList
        onAsideClick={this.handleAsideClick}
        curCate={this.state.curCate}
        cate={this.state.cate && this.state.cate[this.props.type]}
        onGotoList={this.handleGotoList}
      ></MenuList>
    );
  }
}

export default Menu