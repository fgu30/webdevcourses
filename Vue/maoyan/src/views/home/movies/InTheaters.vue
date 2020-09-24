<template>
  <div>
    <MovieList :hot-list="hotList"></MovieList>
  </div>
</template>

<script>
import MovieList from '@c/movie-list/MovieList'
export default {
  props: {
    hotList: {
      type: Array
    }
  },

  components: {
    MovieList
  }
}
</script>

<style lang='stylus' scoped>

</style>