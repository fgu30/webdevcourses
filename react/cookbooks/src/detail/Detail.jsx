import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import animate from '@h/animate'

import {
  NavBar,
  Icon
} from 'antd-mobile'

import {
  DetailWrap
} from './StyledDetail'


@withRouter
@animate
class Detail extends Component {
  handleClickLeft = () => {
    let { history } = this.props
    let {from, listTitle} = this.props.location.state
    history.push(from, {from: '/detail', title: listTitle})
  }

  render() {
    let state = this.props.location.state
    return (
      <DetailWrap>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.handleClickLeft}
          style={{backgroundColor: '#ee742f' }}
        >
          {state && state.title}
        </NavBar>
        <div>
          <div>
            <img src="http://s1.cdn.jiaonizuocai.com/videoImg/201510/1313/561c9a314c8bb.jpg/OTAweDYwMA" alt=""/>
          </div>
          <div className="details">
            <h1>{state && state.title}</h1>
            <h3>23567浏览 9560收藏</h3>
            <button>收藏</button>
          </div>
        </div>
      </DetailWrap>
    );
  }
}

export default Detail