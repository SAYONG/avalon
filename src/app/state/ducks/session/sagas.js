import {takeLatest, take, call, put} from 'redux-saga/effects'

import types from './types'
import {routingActions} from '../routing'
import {signInWithFB} from '../../../api/session'

function* authStateChange() {
  while (true) {
    const action = yield take(types.AUTH_STATE_CHANGE)
    const {user} = action.payload
    if (user) {
      yield put(routingActions.navigate('lobby'))
    } else {
      yield put(routingActions.navigate('signIn'))
    }
  }
}

function* fbSignIn(action) {
  yield call(signInWithFB)
}

function* watchFbSignIn() {
  yield takeLatest(types.REQUEST_FB_SIGN_IN, fbSignIn)
}

export default [
  authStateChange,
  watchFbSignIn
]
