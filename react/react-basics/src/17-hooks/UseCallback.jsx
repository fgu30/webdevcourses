import React, { useState, useCallback, memo } from 'react'

const Child = memo(function(props) {
  console.log('child run...')
  return (
    <>
      <h1>hello</h1>
      <button onClick={props.onAdd}>add</button>
    </>
  )
})

export default function UseCallback() {
  console.log('parent run...')
  let [ count, setCount ] = useState(0)

  const handleAdd = useCallback(
    () => {
      console.log('added.')
    },
    [],
  )

  // const handleAdd = () => {
  //   console.log('added.')
  // }

  return (
    <div>
      <div>{count}</div>
      <Child onAdd={handleAdd}></Child>
      <button onClick={() => setCount(100)}>change count</button>
    </div>
  )
}
