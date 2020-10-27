import React from 'react'
import PropTypes from 'prop-types'

import MenuList from '@c/menu/MenuList'

import useCateChange from './useCateChange'
import useGotoList from './useGotoList'

const Menu = () => {
  const { cate, cateAside, cateType, handleAsideClick } = useCateChange()
  const { handleGotoList } = useGotoList()

  return (
    <MenuList
      onAsideClick={handleAsideClick}
      curCate={cateAside}
      cate={cate && cate[cateType]}
      onGotoList={handleGotoList}
    ></MenuList>
  );
}

Menu.propTypes = {
  type: PropTypes.string
}

export default Menu