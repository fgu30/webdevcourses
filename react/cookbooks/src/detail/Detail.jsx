import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import {
  NavBar,
  Icon
} from 'antd-mobile'

import {
  DetailWrap
} from './StyledDetail'


@withRouter
class Detail extends Component {
  handleClickLeft = () => {
    let { history } = this.props
    history.goBack()
  }

  render() {
    let title = this.props.location.state.title
    return (
      <DetailWrap>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.handleClickLeft}
          style={{backgroundColor: '#ee742f' }}
        >
          {title}
        </NavBar>
        <div>
          <div>
            <img src="http://s1.cdn.jiaonizuocai.com/videoImg/201510/1313/561c9a314c8bb.jpg/OTAweDYwMA" alt=""/>
          </div>
          <div className="details">
            <h1>{title}</h1>
            <h3>23567浏览 9560收藏</h3>
            <button>收藏</button>
          </div>
        </div>
      </DetailWrap>
    );
  }
}

export default Detail