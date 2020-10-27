import { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '@/home/category'

import {get} from '@u/http'

const useCateChange = () => {
  
  const [cate, setcate] = useState(null)
  const cateAside = useSelector(state => state.getIn(['category', 'routeInfo', 'cateAside']))
  const cateType = useSelector(state => state.getIn(['category', 'routeInfo', 'cateType']))
  const dispatch = useDispatch()

  const handleAsideClick = useCallback((curCate) => {
    return () => {
      dispatch(ac.changeCateAside(curCate))
    }
  }, [dispatch])

  useEffect(() => {
    (async () => {
      let result = await get({
        url: '/api/category'
      })

      setcate(result.data.data)
  
      if (cateAside === '') {
        dispatch(ac.changeCateAside(cateType === 'category' ? '热门' : '肉类'))
      }
    })()
  }, [cateType, cateAside, dispatch])

  return {
    cateType,
    cateAside,
    cate,
    handleAsideClick
  }
}

export default useCateChange