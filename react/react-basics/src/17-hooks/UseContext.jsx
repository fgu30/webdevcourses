import React, { createContext, useContext } from 'react'

let nameContext = createContext({name: 'zhangsan'})
let ageContext = createContext({age: 12})

export default function UseContext() {
  let name = useContext(nameContext)
  let age = useContext(ageContext)
  return (
    <div>
      {name.name} {age.age}
    </div>
  )
}
