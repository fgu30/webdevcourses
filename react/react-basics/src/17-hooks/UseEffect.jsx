import React from 'react'
import { useState, useEffect } from 'react'

export default function (props) {
  let [data, setData] = useState({count: 0})

  useEffect(() => {
    console.log('effect')
  }, [data])

  useEffect(() => {
    return () => {
      console.log('unmout')
    }
  }, [])

  return (
    <>
      <div>{data.count}</div>
      <button onClick={() => setData(data => ({count: data.count + 1}))}>click</button>
    </>
  )
}
