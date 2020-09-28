<template>
  <van-pull-refresh
    v-model="refreshing"
    @refresh="onRefresh"
  >
    <van-list
      v-model="loading"
      @load="onLoad"
      :finished="finished"
      finished-text="我也是有底线的"
    >
      <main>
        <nav>
          <div @click="handleCityClick">
            {{city}}
            <i class="city-entry-arrow"></i>
          </div>
          <div>
            <ul>
              <router-link tag="li" active-class="active" to="/movie/intheaters">热映</router-link>
              <router-link tag="li" active-class="active" to="/movie/comingsoon">待映</router-link>
            </ul>
          </div>
          <div></div>
        </nav>
        <router-view :hot-list="hotlist"></router-view>
      </main>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import Vue from 'vue'
import { List, PullRefresh } from 'vant'

Vue.use(List)
Vue.use(PullRefresh)

import http from '@u/http'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      hotlist: [],
      allHotList: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },

  created() {
    // 初始化翻页数据
    this.limit = 12
    this.page = 0
  },

  mounted() {
    // this.loadData()
  },

  computed: {
    ...mapState(['city'])
  },

  methods: {
    async loadData() {
      // 表示用户下拉，需要将Page的页码重置为0, 同时清空list，不影响上拉加载
      if (this.refreshing) {
        this.hotlist = []
        this.page = 0
      }

      let result = await http.get('/api/mmdb/movie/v2/list/hot.json', {
        limit: this.limit, // pageSize: 每页多少条
        offset: this.limit * this.page, // 分页的起始点
        ct: this.$store.state.city
      })
      
      this.hotlist = [
        ...this.hotlist,
        ...result.data.hot
      ]

      this.loading = false
      this.refreshing = false
      this.page++

      if (this.page >= Math.ceil(result.data.total / this.limit)) {
        this.finished = true
      }

      await this.$nextTick()
      document.querySelector('.main').scrollTo(0, this.$store.state.scrollTop)

    },

    onLoad() {
      this.loadData()
    },

    onRefresh() {
      this.loadData()
    },

    handleCityClick() {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@a/stylus/border.styl'
@import '~@a/stylus/ellipsis.styl'

main
  nav
    display flex
    border_1px(0 0 1px 0)
    > div:first-child
      width .7rem
      display flex
      justify-content center
      align-items center
      color #999
      .city-entry-arrow
        width 0
        height 0
        border .04rem solid #b0b0b0
        border-left-color transparent
        border-right-color transparent
        border-bottom-color transparent
        display inline-block
        margin-left .04rem
        margin-top .05rem

    > div:nth-child(2)
      flex 1
      ul
        width 100%
        display flex
        padding-left 15%
        padding-right 25%
        li
          position relative
          flex 1
          line-height .44rem
          text-align center
          font-size .16rem
          color #666
          &.active
            color #cc4c43
          &.active::after
            width .4rem
            height 100%
            position absolute
            left 50%
            transform translate(-50%, 0)
            bottom 0
            content ''
            border-bottom solid .02rem #cc4c43


    > div:last-child
        width .44rem
        height .44rem
        border_1px(0 0 0 1px)
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII=') no-repeat;
        background-size .2rem
        padding .1rem .15rem .1rem .1rem
        background-position .1rem
</style>