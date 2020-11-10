<template>
  <view class="map-container">
    <map
      id="map" 
      class="map"
      :longitude="longitude"
      :latitude="latitude"
      :markers="markers"
      show-location
    >
      <cover-image
        class="center"
        :src="center"
        @tap="handleImageTap"
      ></cover-image>
      <cover-image
        class="pin"
        :src="pin"
        @tap="handleImageTap"
      >
      </cover-image>
    </map>
    <view class="nav">
      <navigator class="publish" url="/pages/publish/publish" openType="navigate">发布</navigator>
      <view class="search">搜索</view>
    </view>
  </view>
</template>

<script>
import Vue from 'vue'

import Taro from '@tarojs/taro'

import center from '@/assets/center.png'
import pin from '@/assets/pin.png'

import './home.less'

export default {
  methods: {
    handleImageTap() {}
  },
  data() {
    return {
      longitude: 0,
      latitude: 0,
      markers: [],
      center,
      pin
    }
  }
}
</script>

<style lang='less' scoped>

</style>