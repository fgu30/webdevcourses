import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator as ac } from '@/home/category'

import MenuList from '@c/menu/MenuList'

import {get} from '@u/http'

@withRouter
@connect(
  state => ({
    cateAside: state.category.routeInfo.cateAside,
    cateType: state.category.routeInfo.cateType
  }),

  dispatch => ({
    changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)
class Menu extends Component {
  static propTypes = {
    type: PropTypes.string
  }

  state = {
    cate: null
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/category'
    })

    this.setState({
      cate: result.data.data
    })

    if (this.props.cateAside === '') {
      this.props.changeCateAside(this.props.cateType === 'category' ? '热门' : '肉类')
    }
  }
  
  handleAsideClick = (curCate) => {
    return () => {
      // console.log(curCate)
      this.props.changeCateAside(curCate)
    }
  }

  handleGotoList = (title) => {
    return () => {
      this.props.history.push('/list', { title })
    }
  }

  render() {
    // console.log(this.props.cateAside)
    return (
      <MenuList
        onAsideClick={this.handleAsideClick}
        curCate={this.props.cateAside}
        cate={this.state.cate && this.state.cate[this.props.cateType]}
        onGotoList={this.handleGotoList}
      ></MenuList>
    );
  }
}

export default Menu