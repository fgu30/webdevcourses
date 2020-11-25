<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.name}} - {{product.price}} x {{product.quantity}}
      </li>
    </ul>
    <div v-if="products.length > 0">￥{{total}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('cart', {
      products: 'items'
    }),
    ...mapGetters('cart', ['total'])
  }
}
</script>

<style lang='stylus' scoped>

</style>