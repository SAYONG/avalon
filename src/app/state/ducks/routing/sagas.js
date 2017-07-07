import {takeLatest, call} from 'redux-saga/effects'

import router from '../../../router'
import types from './types'

export function* navigate(action) {
  const {to, params, options} = action.payload
  yield call(router.navigate, to, params, options)
}

export function* watchNavigate() {
  yield takeLatest(types.NAVIGATE, navigate)
}

export default [
  watchNavigate
]
