<template>
  <div class="container">
    <div class="most-popular">
      <h1>近期最受欢迎</h1>
      <van-skeleton 
        avatar
        avatar-shape="square"
        :row="6"
        :loading="loading"
      >
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
      </van-skeleton>
    </div>
    <div class="list">
      <div
        v-for="(value,key) in groupedHotList"
        :key="key"
      >
        <h1>{{key}}</h1>
        <MovieList :hot-list="value"></MovieList>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Skeleton } from 'vant';
Vue.use(Skeleton)

import _ from 'lodash'
import moment from 'moment'

import http from '@u/http.js'
import MovieList from '@c/movie-list/MovieList'
import { mapState } from 'vuex';

export default {
  props: {
    hotList: {
      type: Array
    }
  },

  data() {
    return {
      mostPopularList: [],
      chunkedList: this.hotList,
      loading: true
    }
  },

  components: {
    MovieList
  },

  async mounted() {
    let result = await http.get('/api/mmdb/movie/v1/list/wish/order/coming.json', {
      limit: 50,
      offset: 0,
      ci: this.cityId
    })

    this.mostPopularList = result.data.coming
    this.loading = false
  },

  computed: {
    groupedHotList() {
      let t1 = _.filter(this.hotList, o => o.showst === 4 || o.preSale === 1)
      let t2 = _.groupBy(t1, o => {
        let week = '周' + ['日', '一', '二', '三', '四', '五', '六'][moment(o.rt).day()]
        let md = moment(o.rt).format('MM月DD日')
        return md + ' ' + week
      })
      
      return t2
    },

    ...mapState(['cityId'])
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
    padding-top .1rem
    background #fff
    border_1px(1px 0 0 0)
    h1
      padding-left .15rem
      height .3rem
      font-weight 100
      line-height .3rem

</style>