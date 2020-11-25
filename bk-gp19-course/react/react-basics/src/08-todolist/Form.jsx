import React, { Component } from 'react';

class Form extends Component {
  state = {
    value: ''
  }

  handleChange = () => {
    return (e) => {
      this.setState({
        value: e.target.value
      })
    }
  }

  handleKeyUp = () => {
    return (e) => {
      if (e.keyCode === 13) {
        this.props.onReceiveKeywords(this.state.value)
        this.setState({
          value: ''
        })
      }
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange()}
          onKeyUp={this.handleKeyUp()}
        />
      </div>
    )
  }
}

export default Form;