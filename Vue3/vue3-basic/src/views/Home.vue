<template>
  <div>
    <div>
      <input @keyup.enter="handleEnter" type="text" v-model="keyword">
    </div>
    <ul>
      <li v-for="item, index in store.state.list">
        {{item}} <button @click="handleClick(index)">del</button>
      </li>
    </ul>
    <div>
      <button @click="handleGotoAbout">click</button>
    </div>
  </div>
</template>

<script>
import useForm from './useForm'
import useList from './useList'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    let { handleClick } = useList()
    let { keyword, handleEnter } = useForm()
    let router = useRouter()

    const handleGotoAbout = () => {
      router.push('/about')
    }

    return {
      store,
      keyword, 
      handleEnter,
      handleClick,
      handleGotoAbout
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>