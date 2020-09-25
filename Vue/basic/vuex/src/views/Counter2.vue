<template>
  <div>
    {{count}} {{double}}
    <button @click="increment">+</button>
    <button @click="add100">add add</button>
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['double'])
  },
  methods: {
    ...mapActions(['increment', 'add100'])
  }
}
</script>

<style lang='stylus' scoped>

</style>