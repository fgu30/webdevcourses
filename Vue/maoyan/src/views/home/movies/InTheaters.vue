<template>
  <div class="container">
    <MovieList :hot-list="filteredHotList"></MovieList>
  </div>
</template>

<script>
import _ from 'lodash'
import MovieList from '@c/movie-list/MovieList'

export default {
  props: {
    hotList: {
      type: Array
    }
  },

  computed: {
    filteredHotList() {
      let t = _.filter(this.hotList, o => {
        return o.showst === 3 || o.preSale === 1
      })
      return t
    }
  },

  components: {
    MovieList
  }
}
</script>

<style lang='stylus' scoped>
.container
  position absolute 
  top 0
  left 0
</style>