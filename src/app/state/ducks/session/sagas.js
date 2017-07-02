import {takeLatest, call} from 'redux-saga/effects'

import types from './types'
import {signInWithFB} from '../../../api/session'

function* fbSignIn(action) {
  yield call(signInWithFB)
}

function* watchFbSignIn() {
  yield takeLatest(types.REQUEST_FB_SIGN_IN, fbSignIn)
}

export default [
  watchFbSignIn
]
