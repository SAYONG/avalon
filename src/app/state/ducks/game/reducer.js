import R from 'ramda'
import lens from './lens'
import types from './types'

const roomChangeReducer = (state, action) => {
  const {room} = action.payload
  return R.set(lens.roomLens, room, state)
}

const roomPlayersChangeReducer = (state, action) => {
  const {players} = action.payload
  return R.set(lens.roomPlayersLens, players, state)
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.ROOM_CHANGE:
     return roomChangeReducer(state, action) 
    case types.ROOM_PLAYERS_CHANGE:
     return roomPlayersChangeReducer(state, action) 
  
    default:
      return state
  }
}

export default {
  game: reducer
}
