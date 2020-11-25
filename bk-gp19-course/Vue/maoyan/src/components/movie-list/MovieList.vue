<template>
  <ul>
    <li 
      v-for="m in hotList"
      :key="m.id"
      @click="hanleClick(m.id)"
    >
      <div>
        <img :src="m.img | wh('192.270')" alt="">
      </div>
      <div>
        <h1>{{m.nm}} <MovieVersion :ver="m.ver || '2d'" /></h1>
        <p>{{m.cat}}</p>
        <p>{{m.desc}}</p>
        <div>{{m.showInfo}}</div>
      </div>
      <MovieButton :movie="m" />
    </li>
  </ul>
</template>

<script>
import MovieButton from '@c/movie-list/MovieButton'
import MovieVersion from '@c/movie-list/MovieVersion'

export default {
  props: {
    hotList: {
      type: Array
    }
  },

  components: {
    MovieButton,
    MovieVersion
  },

  mounted() {
    
  },

  methods: {
    hanleClick(id) {
      let scrollTop = document.querySelector('.main').scrollTop
      this.$store.dispatch('changeScrollTop', scrollTop)
      this.$router.push({name: 'details', params: {id}})
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@a/stylus/border.styl'
@import '~@a/stylus/ellipsis.styl'

ul
  padding-left .12rem
  li
    height 1.14rem
    display flex
    padding .12rem .12rem .12rem 0
    border_1px(0 0 1px 0)
    > div:first-child
      width .76rem
      img
        width .64rem
        height .9rem

    > div:nth-child(2)
      flex 1
      h1
        display flex
        align-items center
        font-size .16rem
        font-weight 100
        
      > p
        line-height .22rem
        color #666
        &:nth-of-type(2)
          ellipsis()
      div
        line-height .22rem
        color #999
        ellipsis()

    &:last-child
      border_1px(0)
</style>