import React, { Component } from 'react'
import {
  View,
  Label,
  Text,
  RadioGroup,
  Radio,
  Input,
} from '@tarojs/components'

import {
  AtForm, AtInput, AtButton, AtRadio
} from 'taro-ui'

import Taro from '@tarojs/taro'

import './publish.less'

class publish extends Component {
  state = {
    address: '点击选择，请勾选哦~',

    isSubmit: false,
    isSucc: false,

    contactValue: '',
    messageValue: '',
    typeValue: ''
  }

  handleAddressClick = () => {
    Taro.chooseLocation({
      success: (res) => {
        let { address, latitude, longitude } = res

        this.setState({
          address: address
        })

        this.staticData.longitude = longitude
        this.staticData.latitude = latitude
      }
    })
  }

  handleMessageChange = (value) => {
    this.setState({
      messageValue: value
    })
  }

  handleContactChange = (value) => {
    this.setState({
      contactValue: value
    })
  }

  handleRadioChange = (e) => {
    this.staticData.type = e.detail.value
  }

  handleSubmitTap = () => {
    Taro.request({
      url: 'http://walter666.cn/server/index.php/trade/add_item', //仅为示例，并非真实的接口地址
      data: {
        address: this.state.address,
        contact: this.state.contactValue,
        message: this.state.messageValue,
        ...this.staticData
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        if (res.data.ret) {
          this.setState({
            isSubmit: true,
            isSucc: true
          })
        } else {
          this.setState({
            isSubmit: true,
            isSucc: false
          })
        }
      }
    })
  }

  componentWillMount() {
    this.staticData = {
      type: 'buy'
    }
  }


  render() {
    return (
      <>
        <View class="publish-wrap">
          <View class="item">
            <View class="label">
              <Label><Text>我的地址</Text></Label>
            </View>
            <View class="field" onClick={this.handleAddressClick}>
              {this.state.address}
            </View>
          </View>

          <View class="item">
            <View class="label">
              <Label><Text>类型</Text></Label>
            </View>
            <View class="field">
              <RadioGroup
                class="radio-group"
                onChange={this.handleRadioChange}
              >
                <Label class="radio-group-label">
                  <View class="radio-wrap">
                    <Radio class="radio" value="buy" checked="true"/>
                  </View>
                  <View class="radio-wrap">求购</View>
                </Label>
                <Label class="radio-group-label">
                  <View class="radio-wrap">
                    <Radio class="radio" value="sell" />
                  </View>
                  <View class="radio-wrap">转让</View>
                </Label>
              </RadioGroup>
            </View>
          </View>

          <AtForm>
            <AtInput 
              name='message' 
              title='说明' 
              type='text' 
              placeholder='请输入说明' 
              value={this.state.messageValue} 
              onChange={this.handleMessageChange} 
            />
            <AtInput 
              name='contact' 
              title='联系方式' 
              type='text' 
              placeholder='请输入联系方式' 
              value={this.state.contactValue} 
              onChange={this.handleContactChange} 
            />
          </AtForm>
          <View class="button" onClick={this.handleSubmitTap}>
            <Text>发布信息</Text>
          </View>
        </View>
      </>
    );
  }
}

export default publish;