import {take, call} from 'redux-saga/effects'

import types from './types'
import {createNewRoom} from '../../../api/room'

function* createRoom() {
  while (true) {
    const action = yield take(types.CREATE_ROOM)
    const {roomName} = action.payload
    yield call(createNewRoom, roomName)
  }
}

export default [
  createRoom
]
