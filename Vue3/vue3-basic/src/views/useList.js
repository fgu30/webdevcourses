import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'

const useList = () => {
  const store = useStore()

  const handleClick = (index) => {
    store.commit('delList', index)
  }

  onMounted(() => {
    store.dispatch('loadData')
  })

  return {
    handleClick
  }
}

export default useList
