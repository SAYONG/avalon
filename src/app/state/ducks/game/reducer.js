import R from 'ramda'
import lens from './lens'
import types from './types'

const roomChangeReducer = (state, action) => {
  const {room} = action.payload
  return R.set(lens.roomLens, room, state)
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.ROOM_CHANGE:
     return roomChangeReducer(state, action) 
  
    default:
      return state
  }
}

export default {
  game: reducer
}
