<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{$store.state.count}} {{double}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // double() {
    //   return this.$store.state.count * 2
    // },
    ...mapState({
      double: state => state.count * 2
    })
  }
}
</script>
