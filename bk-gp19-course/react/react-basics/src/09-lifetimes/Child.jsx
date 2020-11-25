import React, { PureComponent } from 'react';

class Child extends PureComponent {
  state = {
    color: '',
    // 定义了一个冗余的state
    preColor: ''
  }

  // 根据props，生成一个新的state
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.color === prevState.preColor) {
  //     return null
  //   } else {
  //     return { //shallow merge state
  //       color: nextProps.color,
  //       preColor: nextProps.color
  //     }
  //   }
  // }


  componentDidMount() {
    // console.log('child did mount')
    setTimeout(() => {
      this.setState({
        color: 'blue'
      })
    }, 3000)
  }

  // updating
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // console.log(nextProps)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(this.props.title === nextProps.title)
  // }

  // UNSAFE_componentWillUpdate() {
  //   // console.log('componentWillUpdate')
  // }

  render() {
    return (
      <div>
        color: {this.state.color}
      </div>
    );
  }

  getSnapshotBeforeUpdate() {
    // dom操作
    return 120
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('componentDidUpdate')
    console.log(snapshot)
  }
}

export default Child;