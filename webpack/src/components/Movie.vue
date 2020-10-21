<template>
  <div>
    <h1>vue pages</h1>
    <img width="100" height="100" :src="img" alt="">
  </div>
</template>

<script>
import img from '../assets/images/QQ20201017-0.png'
export default {
  data() {
    return {
      img
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>