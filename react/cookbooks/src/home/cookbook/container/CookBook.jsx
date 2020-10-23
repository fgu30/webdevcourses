import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../actionCreator'
import { withRouter } from 'react-router-dom'

import CookBookUi from '../ui/CookBookUi'

@connect(
  (state) => {
    return {
      list: state.cookbook.list
    }
  },
  (dispatch) => ({
    loadData() {
      dispatch(actionCreator.loadDataAsync())
    }
  })
)
@withRouter
class CookBook extends Component {
  handleGotoDetail = (title) => {
    return () => {
      this.props.history.push('/detail', { title })
    }
  }

  render() {
    return (
      <CookBookUi
        list={this.props.list}
        onGotoDetail={this.handleGotoDetail}
      ></CookBookUi>
    )
  }

  componentDidMount() {
    this.props.loadData()
  }

  componentDidUpdate() {
    // console.log(this.props.list)
  }
}


export default CookBook