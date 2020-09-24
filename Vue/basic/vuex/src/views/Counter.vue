<template>
  <div>
    <button @click="dec">-</button>
    {{$store.state.count}}
    <button @click="inc">+</button>

    <About></About>
  </div>
</template>

<script>
import About from './About'
export default {
  components: {
    About
  },
  mounted() {
    // var source = {
    //   "p1": {
    //     price: 100,
    //     name: 'apple'
    //   },
    //   "p3": {
    //     price: 200,
    //     name: 'apple watch'
    //   },
    //   "p2": {
    //     price: 50,
    //     name: 'banana'
    //   }
    // }

    // let newObj = Object.keys(source).sort().reduce((obj, key) => {
    //   console.log(obj)
    //   obj[key] = source[key]
    //   return obj
    // }, {})

    // // console.log(source)
    // console.log(newObj)

  },
  methods: {
    inc() {
      this.$store.dispatch('increment')
    },

    dec() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>