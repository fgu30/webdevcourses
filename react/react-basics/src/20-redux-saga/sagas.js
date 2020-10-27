import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

function* sagaAsync() {
  // setTimeout( function * () {
  // }, 2000)

  let res = yield axios({url: '/api/list'}).then(result=>result)
  console.log(res)
  yield put({type: 'add', data: 100})
}

function * sagas() {
  console.log(0)
  // 接受所有的dispatch对应的action的请求
  yield takeEvery('sagaAdd', sagaAsync)
}

export default sagas