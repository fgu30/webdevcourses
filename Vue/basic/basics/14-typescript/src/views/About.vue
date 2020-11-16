<template>
  <div class="about">
    <!-- <h1
      ref="h1"
    >This is an about page {{name}}</h1>
    <Header
      @add-to-cart="handleAdd"
      ref="header"
    ></Header> -->
    <Header></Header>

    <div>{{title}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Ref, Inject, InjectReactive } from 'vue-property-decorator'
import Header from './Header.vue'

@Component({
  components: {
    Header
  }
})
export default class extends Vue {
  private name: string = 'aaa'

  // @Watch('name', {
  //   immediate: true
  // })
  // onWatch(newValue: string, oldValue: string) {
  //   console.log(newValue)
  //   console.log(oldValue)
  // }

  // mounted() {
  //   // this.name = 'ccc'
  // }

  // @Ref('h1')
  // header1!: HTMLHeadingElement

  // @Ref('header')
  // h!: Header

  // handleAdd(value: number) {
  //   console.log(value)
  //   console.dir(this.header1)
  //   console.log(this.h)
  // }

  @Inject()
  title!: string
}
</script>
