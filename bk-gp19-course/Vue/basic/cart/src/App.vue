<template>
  <div>
    <h1>我的购物车</h1>
    <h3>产品列表</h3>
    <hr>
    <Products></Products>
    <h3>购物车</h3>
    <hr>
    <Cart></Cart>
  </div>
</template>

<script>
import Products from './views/Products'
import Cart from './views/Cart'

export default {
  components: {
    Products,
    Cart
  }
}
</script>

<style lang='stylus' scoped>

</style>