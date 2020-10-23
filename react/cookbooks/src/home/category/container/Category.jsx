import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator as ac } from '@/home/category'

import CategoryUi from '../ui/CategoryUi'

@connect(
  state => ({
    cateType: state.category.routeInfo.cateType
  }),
  dispatch => ({
    changeCateType(type) {
      dispatch(ac.changeCateType(type))
    },
    changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)

class Container extends Component {
  handleClick = (type) => {
    return () => {
      this.props.changeCateType(type)
      this.props.changeCateAside(type === 'category' ? '热门' : '肉类')
    }
  }

  render() {
    return (
      <CategoryUi
        type={this.props.cateType}
        onCategoryUiClick={this.handleClick}
      ></CategoryUi>
    )
  }
}

export default Container