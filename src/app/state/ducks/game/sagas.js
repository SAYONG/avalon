import R from 'ramda'
import {take, call, select} from 'redux-saga/effects'

import types from './types'
import {createNewRoom} from '../../../api/room'
import {sessionLens} from '../session'

function* createRoom() {
  while (true) {
    const action = yield take(types.CREATE_ROOM)
    const user = yield select(state => R.view(sessionLens.userLens, state.session))
    yield call(createNewRoom, [user.uid])
  }
}

export default [
  createRoom
]
