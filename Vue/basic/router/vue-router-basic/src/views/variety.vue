<template>
  <div>
    variety

    <button @click="handleClick">goto movie page</button>
  </div>
</template>

<script>
export default {
  // 路由守卫
  beforeRouteEnter (to, from, next) {
    // console.log(to.path)
    next()
  },

  beforeRouteLeave (to, from, next) {
    // console.log(to.path)
    next()
  },

  methods: {
    handleClick() {
      this.$router.replace({name: 'tv', params: { id: '23' }})
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>