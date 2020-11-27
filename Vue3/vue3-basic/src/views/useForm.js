import { ref, computed, watchEffect } from 'vue'
import { useStore} from 'vuex'

const useForm = () => {
  const store = useStore()
  const keyword = ref('hello')

  const keywords = computed(() => {
    return keyword.value + '!!!'
  })

  watchEffect(() => console.log(keyword.value))

  const handleEnter = () => {
    store.state.list.push(keywords.value)
    keywords.value = ''
  }

  return {
    keyword,
    handleEnter
  }
}

export default useForm 
