import {takeLatest, take, call, put, all} from 'redux-saga/effects'

import types from './types'
import actions from './actions'
import {routingActions, routingTypes} from '../routing'
import sessionApi from '../../../api/session'
import gameApi from '../../../api/game'

function* redirectUser(user) {
  const next = user? 'lobby': 'signIn'
  yield put(routingActions.navigate(next))
}

function* authStateChange() {
  const [authStateChange,] = yield all([
    take(types.AUTH_STATE_CHANGE),
    take(routingTypes.ROUTER_STARTED)
  ])
  const {user} = authStateChange.payload
  yield* redirectUser(user)
  while (true) {
    const action = yield take(types.AUTH_STATE_CHANGE)
    const {user} = action.payload
    yield* redirectUser(user)
  }
}

function* fbSignIn(action) {
  yield call(sessionApi.signInWithFB)
}

function* watchFbSignIn() {
  yield takeLatest(types.REQUEST_FB_SIGN_IN, fbSignIn)
}

function* signOut() {
  while (true) {
    yield take(types.SIGN_OUT)
    yield call(sessionApi.signOut)
  }
}

function* watchUserExistence() {
  while (true) {
    const action = yield take(types.AUTH_STATE_CHANGE)
    const {user} = action.payload
    if (user) {
      yield put(actions.userExist(action.payload.user))
    } else {
      yield put(actions.noUser())
    }
  }
}

function* registerOnlinePlayerSaga() {
  while (true) {
    const action = yield take(types.USER_EXIST)
    const {user} = action.payload
    const player = yield call(gameApi.userToPlayer, user)
    yield call(gameApi.registerOnlinePlayer, player)
  }
}

export default [
  authStateChange,
  signOut,
  watchFbSignIn,
  watchUserExistence,
  registerOnlinePlayerSaga
]
