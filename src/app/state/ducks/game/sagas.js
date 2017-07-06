import R from 'ramda'
import {take, call, select, put} from 'redux-saga/effects'

import types from './types'
import actions from './actions'
import {createNewRoom, joinRoom, isRoomExist} from '../../../api/room'
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
    if (yield call(isRoomExist, room)) {
      const user = yield select(state => R.view(sessionLens.userLens, state.session))
      const player = yield call(userToPlayer, user)
      yield call(joinRoom, player, room)
    } else {
      yield put(actions.joiningRoomNotExist(room))
    }
  }
}

export default [
  createRoom,
  joinRoomSaga
]
