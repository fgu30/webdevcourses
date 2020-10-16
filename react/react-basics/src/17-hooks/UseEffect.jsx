import React from 'react'
import { useState, useEffect } from 'react'

export default function (props) {
  let [data, setData] = useState({count: 0})

  function loadData() {
    return fetch('http://localhost:8080/api/movies/list')
      .then(response => response.json())
      .then(result => {
        return result
      })
  }

  useEffect(() => {
    console.log('effect')
  }, [data])

  useEffect(() => {
    console.log('mounted.')

    ;(async ()=>{
      let result = await loadData()
      console.log(result)
    })()

    // return () => {
    //   console.log('unmout')
    // }
  }, [])

  return (
    <>
      <div>{data.count}</div>
      <button onClick={() => setData(data => ({count: data.count + 1}))}>click</button>
    </>
  )
}
