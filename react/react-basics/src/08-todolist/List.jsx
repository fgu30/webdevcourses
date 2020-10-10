import React from 'react'
import PropTypes from 'prop-types'

export default function List(props) {
  return (
    <ul>
      {
        props.list.map(value => <li key={value.id}>{value.taskname} <span onClick={props.onDeleteTask(value.id)}>X</span></li>)
      }
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.array
}
