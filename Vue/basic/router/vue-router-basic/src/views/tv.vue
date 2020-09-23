<template>
  <div>
    tv {{xxx}} {{yyy}}
  </div>
</template>

<script>
export default {
  props: {
    xxx: {
      type: String
    },
    yyy: {
      type: String
    }
  },
  data() {
    return {
      // id: this.$route.params.id
    }
  },
  mounted() {
    // console.log(this.$route.params.id)
  },
  // computed: {
  //   id() {
  //     let { id } = this.$route.params
  //     return id
  //   }
  // },

  // 路由守卫
  beforeRouteEnter (to, from, next) {
    console.log(to.meta.left)
    next((vm) => {
      // console.log(vm.xxx)
    })
  },

  // 专门用于监测动态路由
  // beforeRouteUpdate(to, from, next) {
  //   console.log('update:' + to.path)
  //   next()
  // },

  beforeRouteLeave (to, from, next) {
    // console.log(to.path)
    next()
  },

  watch: {
    $route(to, from) {
      console.log(to, from)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>