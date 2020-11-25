import React, { Component, createRef } from 'react'

export default class File extends Component {
  constructor(props) {
    super(props)
    this.file = createRef()
  }

  handleClick = () => {
    return () => {
      console.log(this.file.current.files[0].name)
    }
  }

  render() {
    return (
      <div>
        <input type="file" ref={this.file}/>
        <button onClick={this.handleClick()}>get filename</button>
      </div>
    )
  }
}
