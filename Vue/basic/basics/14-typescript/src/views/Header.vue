<template>
  <div>
    header
    <!-- {{headerName}} -->
    {{title}}
    <button @click="addToCart(80)">click</button>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { 
  Vue, 
  Component,
  Prop, 
  PropSync, 
  Model, Emit,
  Inject,
  InjectReactive
} from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  // @Prop([String, Number]) public title: string | number
  // @Prop({
  //   type: Number
  // }) age!: number

  // @PropSync('name', {type: String}) SyncName: string

  // handleClick() {
  //   // this.title = 'abc'
  //   this.SyncName = 'def'
  // }

  // @Model('name', {type: String}) headerName : string

  // handleClick() {
  //   this.$emit('name', 'aaa')
  // }

  @Emit()
  addToCart(value: string) {
    // return 100
    return undefined
  }

  @Inject()
  title!: string
}
</script>

<style lang='stylus' scoped>

</style>