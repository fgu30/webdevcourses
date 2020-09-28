<template>
  <div>
    <van-nav-bar
      title="详情"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)

export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang='stylus'>
.van-nav-bar
  background #cc4c43
.van-nav-bar__title
  color #fff
.van-nav-bar .van-icon
  color #fff
</style>