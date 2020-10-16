import React, { useState } from 'react'
import memoize from 'memoize-one'

const AAA = function(props) {
  return (
    <div>aaa</div>
  )
}

// 在函数式的组件里，将memoize放到组件外
const getNewString = memoize((str) => {
  console.log(10000)
  return str + 'world!'
})

const Child = function(props) {  
  // console.log(props.title)

  return (
    <div>
      <h1>Child</h1>
      <AAA></AAA>
      {getNewString(props.title)}
    </div>
  )
}

export default function Memoization() {
  // console.log(1)
  let [title, setTitle] = useState('hello')
  let [count, setCount] = useState(0)

  // const add = (a, b) => {
  //   console.log(0)
  //   return a + b
  // }
  // const memoizedAdd = memoize(add)
  
  // memoizedAdd(1, 2); // 3
  
  // memoizedAdd(1, 2); // 3

  // memoizedAdd(1, 3); // 3

  return (
    <div>
      <div>{count}</div>
      <Child title={title}></Child>
      <button onClick={() => setTitle('hello ')}>change</button>
      <button onClick={() => setTitle('hello+')}>change</button>
      <button onClick={() => setCount(100)}>change2</button>
      <button onClick={() => setCount(300)}>change3</button>
      {/* hello */}
    </div>
  )
}
