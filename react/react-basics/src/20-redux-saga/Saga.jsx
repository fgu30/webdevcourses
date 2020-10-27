import React, { Component } from 'react';
import { connect } from 'react-redux'

@connect(
  state => ({
    count: state.count
  }),

  dispatch => ({
    add() {
      dispatch({
        type: 'sagaAdd',
        data: 100
      })
    }
  })
)
class Saga extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.add}>add</button>
      </div>
    );
  }
}

export default Saga;