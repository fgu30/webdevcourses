<template>
  <div>
    header
    {{SyncName}}
    <button @click="handleClick">click</button>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Prop, PropSync, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  // @Prop([String, Number]) public title: string | number
  // @Prop({
  //   type: Number
  // }) age!: number

  @PropSync('name', {type: String}) SyncName: string

  handleClick() {
    // this.title = 'abc'
    this.SyncName = 'def'
  }
}
</script>

<style lang='stylus' scoped>

</style>