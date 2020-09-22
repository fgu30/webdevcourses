<template>
  <div>
    <ul>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
      <li><img src="http://p1.meituan.net/192.270/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='stylus' scoped>
ul
  display flex
  flex-wrap wrap
  padding-left .1rem
  li
    width calc(50% - 10px)
    &:nth-child(2n+1)
      margin-right .1rem
      margin-bottom .1rem
    img
      width 100%
</style>