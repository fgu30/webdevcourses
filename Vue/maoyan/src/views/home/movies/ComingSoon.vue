<template>
  <div class="container">
    <div class="most-popular">
      <h1>近期最受欢迎</h1>
      <ul>
        <li
          v-for="mp in mostPopularList"
          :key="mp.id"
        >
          <h2>
            <img :src="mp.img | wh('192.270')" alt="mp.nm">
          </h2>
          <h3>{{mp.nm}}</h3>
          <p>{{mp.wish}} 想看</p>
          <p>{{mp.comingTitle}}</p>
        </li>
      </ul>
    </div>
    <div class="list">
      <MovieList :hot-list="hotList"></MovieList>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

import http from '@u/http.js'
import MovieList from '@c/movie-list/MovieList'

export default {
  props: {
    hotList: {
      type: Array
    }
  },

  data() {
    return {
      mostPopularList: [],
      chunkedList: this.hotList
    }
  },

  components: {
    MovieList
  },

  async mounted() {
    let result = await http.get('/api/mmdb/movie/v1/list/wish/order/coming.json', {
      limit: 50,
      offset: 0,
      ci: 1
    })

    this.mostPopularList = result.data.coming


    // 数据转化
    console.log(this.chunkedList)
  }
}
</script>

<style lang='stylus' scoped>
@import '~@a/stylus/border.styl'
@import '~@a/stylus/ellipsis.styl'

.container
  background #eee
  .most-popular
    height 2.3rem
    padding-left .15rem
    margin-bottom .15rem
    background #fff
    border_1px(0 0 1px 0)
    h1
      height .4rem
      font-weight 100
      line-height .4rem
    ul
      display flex
      overflow-x: scroll
      li
        width .8rem
        flex 1
        margin-right .1rem
        h2
          img
            width .8rem
            height 1.15rem
        h3
          font-weight 100
          ellipsis()
        p
          color #999
          ellipsis()


  .list
    background #fff
    border_1px(1px 0 0 0)

</style>