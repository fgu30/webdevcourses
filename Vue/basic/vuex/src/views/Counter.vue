<template>
  <div>
    <button @click="dec(3)">-</button>
    <!-- {{count3}} {{count4}} {{double}} {{calc}} -->
    <button @click="inc">+</button>

    <button @click="add10000">add10000</button> {{count}}

    <About></About>
  </div>
</template>

<script>
import About from './About'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { DECREMENT } from '../store/mutationTypes'
export default {
  data() {
    return {
      x: 100
    }
  },

  // 三种状态：
  // 1、data: 组件内部的状态
  // 2、props: 组件外部传入的状态
  // 3、state: 组件共享的状态（全局状态）

  components: {
    About
  },

  computed: {
    ...mapState({
      count: state => state.count,
      count3: 'count',
      count4: function(state) {
        return this.x + state.count
      },
      // double: state => state.count * 2
    }),
    ...mapGetters(['double']),
    calc() {
      return this.$store.getters.calculate(23)
    }
  },

  methods: {
    inc() {
      this.$store.dispatch('increment')
    },
    ...mapActions(['add10000']),
    // dec() {
    //   this.$store.commit({
    //     type: DECREMENT,
    //     value: 3
    //   })
    // }
    ...mapMutations({
      dec: DECREMENT
    })
  }
}
</script>

<style lang='stylus' scoped>

</style>