<template>
  <div>
    <ul>
      <router-link tag="li" active-class="active" to="/movie/comedy">喜剧</router-link>
      <router-link tag="li" active-class="active" to="/movie/cartoon">动画</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="css">
.active {
  color: red;
  font-size: 30px;
}
</style>