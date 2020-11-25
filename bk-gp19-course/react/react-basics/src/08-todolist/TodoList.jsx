import React, { Component } from 'react'

import Form from './Form'
import List from './List'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
  }

  state = {
    list: []
  }

  handleReceiveKeywords = () => {
    return (keywords) => {
      let taskObj = {
        id: new Date().getTime(),
        taskname: keywords
      }
      this.state.list.push(taskObj)
      this.setState({})
    }
  }

  handleDeleteTask = (id) => {
    return () => {
      let newList = this.state.list.filter(value => {
        return value.id !== id
      })

      this.setState({
        list: newList
      })
    }
  }

  render() {
    return (
      <>
        <Form onReceiveKeywords={this.handleReceiveKeywords()}></Form>
        <List 
          onDeleteTask={this.handleDeleteTask}
          list={this.state.list}
        ></List>
      </>
    );
  }
}

export default TodoList;