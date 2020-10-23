import React from 'react'

import {
  CategoryWrap,
  NavUl
} from './StyledCategory'

import Search from '@c/search/Search'
import Menu from './Menu'

const CategoryUi = (props) => {
  const { type, tabIndex, onCategoryUiClick } = props
  return (
    <CategoryWrap>
      <nav>
        <NavUl
          color="#fff"
          radius={0.15}
        >
          <li 
            className={tabIndex === 0 ? 'active' : ''}
            onClick={onCategoryUiClick(0)}
          >分类</li>
          <li
            className={tabIndex === 1 ? 'active' : ''}
            onClick={onCategoryUiClick(1)}
          >食材</li>
          <li className={tabIndex === 0 ? 'slide' : 'slide right'}></li>
        </NavUl>
      </nav>
      <Search
        outerbg="#fff"
        innerbg="#efefef"
        hasborder={false}

        radius={0.06}
      ></Search>
      <Menu
        type={type}
        {...props}
      ></Menu>
    </CategoryWrap>
  )
}

export default CategoryUi