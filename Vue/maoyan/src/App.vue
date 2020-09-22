<template>
  <div class="container">
    <movies-in-theaters></movies-in-theaters>
  </div>
</template>

<script>
import moviesInTheaters from '@v/home/movies/moviesInTheaters'
// import moviesComingSoon from '@v/home/movies/moviesComingSoon'
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