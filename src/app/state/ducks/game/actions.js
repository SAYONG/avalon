import types from './types'

const createRoom = () => ({
  type: types.CREATE_ROOM
})

const joinRoom = (room) => ({
  type: types.JOIN_ROOM,
  payload: {
    room
  }
})

const joiningRoomNotExist = (room) => ({
  type: types.JOINING_ROOM_NOT_EXIST,
  error: true,
  payload: {
    room
  }
})

const roomChange = (room) => ({
  type: types.ROOM_CHANGE,
  payload: {
    room
  }
})

/**
 * 
 * @param {Object[]} players 
 */
const roomPlayersChange = (players) => ({
  type: types.ROOM_PLAYERS_CHANGE,
  payload: {
    players
  }
})

export default {
  createRoom,
  joinRoom,
  joiningRoomNotExist,
  roomChange,
  roomPlayersChange
}
