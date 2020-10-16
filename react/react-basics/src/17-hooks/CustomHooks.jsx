import React, {useState} from 'react'
// import useCount from './useCount'
import useDataList from './useDateList'

export default function CustomHooks() {
  // let [x, setX] = useState(0)
  // let [v, a, m] = useCount(0)

  console.log(useDataList(1))

  return (
    <div>
      hello
      {/* <button onClick={()=>m(1)}>-</button>
      hello {v}
      <button onClick={()=>a(1)}>+</button> */}
    </div>
  )
}
