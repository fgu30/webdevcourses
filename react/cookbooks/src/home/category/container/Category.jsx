import React, { Component } from 'react'

import CategoryUi from '../ui/CategoryUi'

class Container extends Component {
  state = {
    tabIndex: 0,
    type: 'category'
  }

  handleClick = (index) => {
    return () => {
      this.setState({
        tabIndex: index,
        type: index === 0 ? 'category' : 'material'
      })
    }
  }

  render() {
    return (
      <CategoryUi
        tabIndex={this.state.tabIndex}
        type={this.state.type}
        onCategoryUiClick={this.handleClick}
      ></CategoryUi>
    )
  }
}

export default Container