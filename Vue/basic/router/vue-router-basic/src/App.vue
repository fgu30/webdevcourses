<template>
  <div>
    <ul>
      <router-link tag="li" :to="{path: '/movie', query: { id: 3 }}">电影</router-link>
      <router-link tag="li" to="/tv/13">电视剧</router-link>
      <router-link tag="li" to="/tv/14">电视剧2</router-link>
      <router-link tag="li" to="/v">综艺</router-link>
    </ul>
    <router-view></router-view>
    <router-view name="v2"></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='stylus' scoped>

</style>