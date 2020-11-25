import { useState, useEffect } from 'react'
const useDataList = function(id) {
  let [list, setList] = useState([])

  useEffect(() => {
    setTimeout(() => {
      id === 1 ? setList(['a', 'b', 'c']) : setList(['d', 'e', 'f'])
    }, 1000)

    return () => {
      // cleanup
    }
  }, [])

  return list
}

export default useDataList