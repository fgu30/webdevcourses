<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

interface Book {
  title: string
  author: string
  year: number
}

export default defineComponent({
  props: {
    message: {
      type: String
    }
  },
  // name: 'App',
  // components: {
  //   HelloWorld
  // },
  // props: {
  //   message: {
  //     type: Object as PropType<Book>
  //   }
  // },
  // data() {
  //   return {
  //     title: 'Vue 3 Guide',
  //     author: 'Vue Team',
  //     year: 2000
  //   } as Book // 鸭子模型
  // },
  // computed: {
  //   title2(): string {
  //     return this.title + 'hello'
  //   }
  // }
  setup(props) {
    return {
      x: props.message.toString(),
      y: props.message.filter()
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
