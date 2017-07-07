import R from 'ramda'
import lens from './lens'
import types from './types'

const roomChangeReducer = (state, action) => {
  const {room} = action.payload
  return R.set(lens.roomLens, room, state)
}

const roomPlayerToState = (player, key) => ({...player, key})

const roomPlayersChangeReducer = (state, action) => {
  const {players} = action.payload
  const playersState = R.pipe(
    R.mapObjIndexed(roomPlayerToState),
    R.values
  )(players)
  return R.set(lens.roomPlayersLens, playersState, state)
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
