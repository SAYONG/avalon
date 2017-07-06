import R from 'ramda'
import {take, call, select, put} from 'redux-saga/effects'

import types from './types'
import actions from './actions'
import channels from './channels'
import {createNewRoom, joinRoom, isRoomExist} from '../../../api/room'
import {userToPlayer} from '../../../api/game'
import {sessionLens, sessionTypes} from '../session'
import {routingActions} from '../routing'

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

function* playerRoomSaga() {
  while (true) {
    const {payload: {user}} = yield take(sessionTypes.USER_EXIST)
    const playerRoom = yield call(channels.playerRoom, user.uid)
    while (true) {
      const {room} = yield take(playerRoom)
      yield put(actions.roomChange(room))
    }
  }
}

function* roomChangeSaga() {
  while (true) {
    const {payload: {room}} = yield take(types.ROOM_CHANGE)
    yield put(routingActions.navigate('room', {room}))
    const roomPlayers = yield call(channels.roomPlayers, room)
    while (true) {
      // TODO: exist this loop when user leave the room
      const {players} = yield take(roomPlayers)
      const playersArray = R.values(players)
      yield put(actions.roomPlayersChange(playersArray))
    }
  }
}

export default [
  createRoom,
  joinRoomSaga,
  playerRoomSaga,
  roomChangeSaga
]
