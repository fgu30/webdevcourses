import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.ipt = createRef()
  }

  state = {
    textValue: 'hello'
  }

  handleChange(e) {
    this.setState({
      textValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        {/* <input value={this.state.textValue} onChange={this.handleChange.bind(this)} type="text"/> */}
        <input type="text" onInput={this.handleChange.bind(this)} ref={this.ipt}/>
      </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.state.textValue)
    }, 5000)
  }
}
