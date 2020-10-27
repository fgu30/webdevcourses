import React from 'react'
// import PropTypes from 'prop-types'

import { Carousel } from 'antd-mobile'

import {
  SwiperWrap
} from './StyledCookBook'

const Swiper = (props) => {
  // 因为我们使用第三方组件库(antd-m), 而第三方的组件库要求必须使用原生JS
  // 所以我们需要将immutable转化为原生JS
  const list = props.list.toJS()
  return (
    <SwiperWrap>
      <Carousel
        autoplay={true}
        infinite
      >
        {
          list.length > 0 && list.map(value => {
            return (
              <img onClick={props.onGotoDetail(value.name)} key={value.id} src={value.img} alt=""/>
            )
          })
        }
      </Carousel>
    </SwiperWrap>
  )
}

// Swiper.propTypes = {
//   list: PropTypes.array
// }

export default Swiper
