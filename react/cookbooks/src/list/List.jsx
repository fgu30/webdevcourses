import React, { useEffect, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator } from '@/home/cookbook'
import animate from '@h/animate'

import {
  NavBar,
  Icon
} from 'antd-mobile'

import {
  ListContainer,
  ListWrap,
  SubTitle
} from './StyledList'

const List = (props) => {
  const list = useSelector(state => state.cookbook.list)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0) {
      dispatch(actionCreator.loadDataAsync())
    }
  }, [dispatch, list])

  const handleGotoDetail = useCallback(
    (title) => {
      return () => {
        history.push('/detail', { listTitle: location.state.title, title, from: '/list' })
      }
    },
    [history, location],
  )

  const handleClickLeft = useCallback(() => {
    // let from = this.props.location.state.from
    history.push('/home', { from: '/list'} )
  }, [history])

  let state = location.state
  return (
    <ListContainer>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={handleClickLeft}
        style={{backgroundColor: '#ee742f' }}
      >
        {state && state.title}
      </NavBar>
      <ul>
        {
          list.map((li,i) => (
            <ListWrap
              width="0 0 1px 0"
              key={li.id + i}
              onClick={handleGotoDetail(li.name)}
            >
              <div>
                <img src={li.img} width="115" height="75" alt=""/>
              </div>
              <div>
                <h1>{li.name}</h1>
                <SubTitle>{li.burdens}</SubTitle>
                <h3>{li.all_click}浏览 {li.favorites}收藏</h3>
              </div>
            </ListWrap>
          ))
        }
      </ul>
    </ListContainer>
  )
}

export default animate(List)
