import React, { Component } from 'react'
import PropTypes from 'prop-types'

let {
  string,
  number,
  element,
  instanceOf,
  oneOf,
  oneOfType,
  arrayOf,
  objectOf,
  shape
} = PropTypes


class AAA extends Component {
  render() {
    return (
      <div>aaa</div>
    )
  }
}

class BBB extends Component {
  render() {
    return (
      <div>bbb</div>
    )
  }
}

const bbb = new BBB()

class Child extends Component {
  static propTypes = {
    title(props, propName, componentName) {
      if (props.title === 'hello') {

      } else {
        return new Error()
      }
    }
  }

  render() {
    // console.log(this.props.title)
    return (
      <div>child</div>
    )
  }
}

export default class extends Component {
  render() {
    return (
      <div>
        <Child title=""></Child>
      </div>
    )
  }
}
