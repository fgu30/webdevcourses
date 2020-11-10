<template>
  <view class="publish-wrap">
    <view class="item">
      <view class="label">
        <label><text>我的地址</text></label>
      </view>
      <view class="field" @tap="handleAddressClick">
        {{address}}
      </view>
    </view>

    <view class="item">
      <view class="label">
        <label><text>类型</text></label>
      </view>
      <view class="field">
        <radio-group
          class="radio-group"
          @change="handleRadioChange"
        >
          <label class="radio-group-label">
            <view class="radio-wrap">
              <radio class="radio" value="buy" checked="true"/>
            </view>
            <view class="radio-wrap">求购</view>
          </label>
          <label class="radio-group-label">
            <view class="radio-wrap">
              <radio class="radio" value="sell" />
            </view>
            <view class="radio-wrap">转让</view>
          </label>
        </radio-group>
      </view>
    </view>

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
    <view class="button" @tap="handleSubmitTap">
      <text>发布信息</text>
    </view>
  </view>
</template>

<script>
import './publish.less'
import { AtForm, AtInput } from 'taro-ui-vue'

export default {
  data() {
    return {
      address: '点击选择，请勾选哦~',

      isSubmit: false,
      isSucc: false,

      contactValue: '',
      messageValue: '',
      typeValue: ''
    }
  },

  components: {
    AtForm,
    AtInput
  },

  methods: {
    handleAddressClick(){
      Taro.chooseLocation({
        success: (res) => {
          let { address, latitude, longitude } = res

          this.address = address

          this.staticData.longitude = longitude
          this.staticData.latitude = latitude
        }
      })
    },

    handleMessageChange(value){
      this.messageValue = value
    },

    handleContactChange(value) {
      this.contactValue = value
    },

    handleRadioChange(e) {
      this.staticData.type = e.detail.value
    },

    handleSubmitTap() {
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
            
          } else {
            
          }
        }
      })
    },

    created() {
      this.staticData = {
        type: 'buy'
      }
    },
  },
}
</script>

<style lang='stylus' scoped>

</style>