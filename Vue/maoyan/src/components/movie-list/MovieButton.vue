<template>
  <div class="container">
    <p v-if="movie.showst === 3">{{movie.sc}}<span>分</span></p>
    <p v-if="movie.showst === 4">{{movie.wish}}<span>人喜欢</span></p>
    <div :class="button.cls">
      {{button.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
    required: true
  },

  computed: {
    button() {
      switch(this.movie.showst) {
        case 3:
          return {
            title: '购票',
            cls: ''
          }
        case 4:
          return {
            title: '预售',
            cls: 'pre-sale'
          }
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.container
  position relative
  display flex
  flex-direction column
  align-items flex-end
  justify-content center
  width .6rem
  color #f3ad00
  p
    position absolute
    top 0
    font-size .18rem
    width 1.5rem
    text-align right
    span
      font-size .12rem
      transform scale(0.8)
    
  > div
    width .46rem
    height .28rem
    background #dd5042
    border-radius .04rem
    color #fff
    text-align center
    line-height .28rem
    margin-top .2rem
    &.pre-sale
      background #69afe5
</style>