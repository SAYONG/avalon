import {takeLatest, take, call, put, all} from 'redux-saga/effects'

import types from './types'
import actions from './actions'
import channels from './channels'
import {routingActions, routingTypes} from '../routing'
import sessionApi from '../../../api/session'

function* redirectUser(user) {
  const next = user? 'lobby': 'signIn'
  yield put(routingActions.navigate(next))
}

function* authStateChange() {
  const [authStateChange, started] = yield all([
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
    if (action.payload.user) {
      yield put(actions.userExist(action.payload.user))
    } else {
      yield put(actions.noUser())
    }
  }
}

function* watchPlayerRoom() {
  while (true) {
    const action = yield take(types.USER_EXIST)
    const {user} = action.payload
    const playerRoom = yield call(channels.playerRoom, user.uid)
    while (true) {
      // TODO: unsubscribe when user sign out
      const data = yield take(playerRoom)
      console.debug('room change', data)
    }
  }
}

export default [
  authStateChange,
  signOut,
  watchFbSignIn,
  watchUserExistence,
  watchPlayerRoom
]
