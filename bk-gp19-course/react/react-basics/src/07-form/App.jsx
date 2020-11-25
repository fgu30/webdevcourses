import React, { Component } from 'react'

export default class App extends Component {
  state = {
    textValue: '',
    textareaValue: '',
    selectValue: ['0', '1']
  }

  handleChange = () => {
    return (e) => {
      this.setState({
        textValue: e.target.value
      })
    }
  }

  handleAreaChange = () => {
    return (e) => {
      this.setState({
        textareaValue: e.target.value
      })
    }
  }

  handleSelectChange = () => {
    return (e) => {
      this.setState({
        selectValue: e.target.value
      })
    }
  }

  handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      console.log(this.state.textValue)
      console.log(this.state.textareaValue)
      console.log(this.state.selectValue)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit()}>
        <input 
          type="text" 
          value={this.state.textValue}
          onChange={this.handleChange()}
        />
        <br/>
        <textarea name="" id="" cols="30" rows="10"
          value={this.state.textareaValue}
          onChange={this.handleAreaChange()}
        ></textarea>
        <br/>
        <select
          multiple
          value={this.state.selectValue}
          onChange={this.handleSelectChange()}
        >
          <option value="0">北京</option>
          <option value="1">上海</option>
          <option value="2">深圳</option>
        </select>
        <br/>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}
