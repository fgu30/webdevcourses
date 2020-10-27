import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '@/home/category'

import CategoryUi from '../ui/CategoryUi'

const Category = (props) => {
  const cateType = useSelector(state => state.category.routeInfo.cateType)
  const dispatch = useDispatch()

  const handleClick = useCallback((type) => {
    return () => {
      dispatch(ac.changeCateType(type))
      dispatch(ac.changeCateAside(type === 'category' ? '热门' : '肉类'))
    }
  }, [dispatch])

  return (
    <CategoryUi
      type={cateType}
      onCategoryUiClick={handleClick}
    ></CategoryUi>
  )
}

export default Category