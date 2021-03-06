import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionCreator from '../actionCreator'

const useGetState = () => {
  // useSelector 实现state的跟踪和缓存
  const state = useSelector(state => state.getIn(['cookbook']))

  // react-redux hooks
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionCreator.loadDataSyncSaga())
  }, [dispatch])

  return {
    state
  }
}

export default useGetState