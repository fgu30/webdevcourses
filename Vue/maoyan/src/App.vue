<template>
  <div class="container">
    <movies-in-theaters></movies-in-theaters>
  </div>
</template>

<script>
import moviesInTheaters from './views/home/movies/moviesInTheaters'
export default {
  components: {
    moviesInTheaters
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100%
</style>