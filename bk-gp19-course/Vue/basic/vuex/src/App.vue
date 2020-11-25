<template>
  <div>
    <Counter2></Counter2>
  </div>
</template>

<script>
import Counter from './views/Counter'
import Counter2 from './views/Counter2'
export default {
  components: {
    Counter,
    Counter2
  },

  mounted() {
    fetch('/api/x/web-interface/ranking/region')
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
  }
}
</script>

<style lang='stylus' scoped>

</style>