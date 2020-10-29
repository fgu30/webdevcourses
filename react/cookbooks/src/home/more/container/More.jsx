import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Switch,
  NavBar,
  Button
} from 'antd-mobile'

import {
  MoreWrap,
  TitleBar
} from './StyledMore'

import { actionCreator } from '@/home/'

const More = () => {
  const checked = useSelector(state => state.getIn(['home','checked']))
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (checked) => {
      dispatch(actionCreator.changeSwitch(checked))
      // 本地存储：将checked存起来
      localStorage.setItem('checked', checked)
    },
    [dispatch],
  )

  const handleScanClick = useCallback(
    () => {
      window.wx.ready(function(){
        window.wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            alert(result)
          }
        })
      });
    },
    []
  )

  return (
    <TitleBar>
      <NavBar
        mode="dark"
      >
        更多
      </NavBar>
      <MoreWrap>
        <span>显示地图：</span>
        <Switch
          checked={checked}
          onChange={handleChange}
        ></Switch>
      </MoreWrap>
      <div>
        <Button onClick={handleScanClick}>扫码</Button>
      </div>
    </TitleBar>
  )
}

export default More