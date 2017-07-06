import R from 'ramda'
import {take, call, select} from 'redux-saga/effects'

import types from './types'
import {createNewRoom, joinRoom} from '../../../api/room'
import {userToPlayer} from '../../../api/game'
import {sessionLens} from '../session'

function* createRoom() {
  while (true) {
    yield take(types.CREATE_ROOM)
    const user = yield select(state => R.view(sessionLens.userLens, state.session))
    const player = yield call(userToPlayer, user)
    yield call(createNewRoom, player)
  }
}

function* joinRoomSaga() {
  while (true) {
    const action = yield take(types.JOIN_ROOM)
    const {room} = action.payload
    const user = yield select(state => R.view(sessionLens.userLens, state.session))
    const player = yield call(userToPlayer, user)
    yield call(joinRoom, player, room)
  }
}

export default [
  createRoom,
  joinRoomSaga
]
