import { useHistory } from 'react-router-dom'

const useGotoDetail = () => {
  // react-router-com hooks
  const history = useHistory()

  const handleGotoDetail = (title) => {
    return () => {
      history.push('/detail', { title, from: '/home' })
    }
  }

  return {
    handleGotoDetail
  }
}

export default useGotoDetail