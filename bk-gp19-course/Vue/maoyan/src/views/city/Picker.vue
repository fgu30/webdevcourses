<template>
<div class="container">
  <van-index-bar :index-list="indexList">
    <section>
      <van-index-anchor index="定位">
        <div id="locate" class="city-title">
          定位城市
        </div>
      </van-index-anchor>
      <div class="city-list city-list-inline clearfix">
        <div class="location-city">定位失败，请点击重试</div>
      </div>
    </section>
      
    <section class="history-city-list">
      <van-index-anchor index="最近">
        <div id="history" class="city-title">
          最近访问城市
        </div>
      </van-index-anchor>
      <div class="city-list city-list-inline clearfix">
        <div class="city-item" data-nm="上海" data-id="10">
          上海
        </div>
        <div class="city-item" data-nm="北京" data-id="1">
          北京
        </div>
        <div class="city-item" data-nm="濮阳" data-id="240">
          濮阳
        </div>
      </div>
    </section>

    <section>
      <van-index-anchor index="热门">
        <div id="hot" class="city-title">
          热门城市
        </div>
      </van-index-anchor>
      <div class="city-list city-list-inline clearfix">
          <div class="city-item" data-nm="上海" data-id="10">
            上海
          </div>
        
          <div class="city-item" data-nm="北京" data-id="1">
            北京
          </div>
        
          <div class="city-item" data-nm="广州" data-id="20">
            广州
          </div>
        
          <div class="city-item" data-nm="深圳" data-id="30">
            深圳
          </div>
        
          <div class="city-item" data-nm="武汉" data-id="57">
            武汉
          </div>
        
          <div class="city-item" data-nm="天津" data-id="40">
            天津
          </div>
        
          <div class="city-item" data-nm="西安" data-id="42">
            西安
          </div>
        
          <div class="city-item" data-nm="南京" data-id="55">
            南京
          </div>
        
          <div class="city-item" data-nm="杭州" data-id="50">
            杭州
          </div>
        
          <div class="city-item" data-nm="成都" data-id="59">
            成都
          </div>
        
          <div class="city-item" data-nm="重庆" data-id="45">
            重庆
          </div>
      </div>
    </section>

    <section v-for="(section,key) in cities" :key="key">
      <van-index-anchor :index="key">
        <div class="city-title city-title-letter">
          {{key}}
        </div>
      </van-index-anchor>
      <div class="city-list city-list-block clearfix">
        <div class="city-item"
          v-for="city in section"
          :key="city.id"
          @click=handleClick(city)
        >
          {{city.nm}}
        </div>
      </div>
    </section>
  </van-index-bar>
</div>
</template>

<script>
import _ from 'lodash'
import http from '@u/http.js'
import Vue from 'vue'
import { IndexBar, IndexAnchor } from 'vant'

Vue.use(IndexBar)
Vue.use(IndexAnchor)

export default {
  data() {
    return {
      cities: {}
    }
  },

  async mounted() {
    let result = await http.get('/maoyansh/myshow/ajax/config/maoyan-show-m-web.frontEnd.config.cities')
    console.log(result)
    let groupedObj = _.groupBy(JSON.parse(result.data), (o) => {
      return o.py.substr(0, 1).toUpperCase()
    })
    this.cities = Object.keys(groupedObj).sort().reduce((obj, key) => {
      obj[key] = groupedObj[key]
      return obj
    }, {})
  },

  computed: {
    indexList() {
      return ['定位', '最近', '热门', ...Object.keys(this.cities)]
    }
  },

  methods: {
    handleClick(city) {
      let {nm, id} = city
      this.$store.dispatch('changeCityName', { nm, id })
      this.$router.push('/')
    }
  }
}
</script>

<style lang='stylus' scoped>
.container {
  height 100%
  overflow-y scroll
}
.city-list-container {
  display: none;
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch
}

.clearfix:after {
  content: " ";
  display: table;
  clear: both
}

.city-title {
  padding-left: 15px;
  line-height: 30px
}

.city-title-letter {
  padding-left: 25px
}

.city-list {
  padding-right: 30px
}

.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px
}

.city-list-inline .city-item,
.city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

.city-list-inline .location-city {
  width: auto;
  min-width: 30%;
  padding: 0 20px
}

.city-list-block {
  background-color: #f5f5f5
}

.city-list-block .city-item {
  height: 44px;
  line-height: 44px;
  margin-left: 15px;
  border-bottom: 1px solid #c8c7cc
}

.city-list-block .city-item:last-child {
  border-bottom: none
}
</style>

<style lang="stylus">
.van-index-bar__sidebar
  span
    margin-bottom .05rem
</style>