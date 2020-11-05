<template>
  <div>
    hello
  </div>
</template>

<script>
export default {
  created() {
    this.title = ''
  },

  mounted() {
    setTimeout(() => {
      this.title = 'hello'
    }, 5000)
  },

  watch: {
    title(value) {
      console.log(value)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>