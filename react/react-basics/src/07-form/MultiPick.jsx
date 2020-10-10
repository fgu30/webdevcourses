import React, { Component } from 'react'

export default class MultiPick extends Component {
  state = {
    isGoing: false,
    numberOfGuests: 0,
    textValue: ''
  }

  handleChange = () => {
    return (e) => {
      let name = e.target.name
      let value = name === 'isGoing' ? e.target.checked : e.target.value

      this.setState({
        [name]: value
      })
    }
  }

  handleClick = () => {
    return () => {
      console.log(this.state.isGoing)
      console.log(this.state.numberOfGuests)
    }
  }

  render() {
    return (
      <div>
        <div>
          参与：
          <input 
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleChange()}
          />
        </div>
        <div>
          来宾人数：
          <input 
            type="number"
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleChange()}
          />
        </div>
        <div>
          <input type="text" value={this.state.textValue} onChange={() => {}}/>
        </div>
        <button onClick={this.handleClick()}>click</button>
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      textValue: 'abc'
    })
  }
}
