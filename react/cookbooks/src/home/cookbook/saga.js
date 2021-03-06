import { takeEvery, put, call } from 'redux-saga/effects'

import { get } from '@u/http.js'

import actionCreater from './actionCreator'

function* loadDataAsync() {
  let res = yield call(get, {url: '/cookbooks/mock/cookbook-list.json'})
  yield put(actionCreater.loadDataSync(res.data.data))
} 

function* loadData() {
  yield takeEvery('loadDataSaga', loadDataAsync)
}

export default loadData