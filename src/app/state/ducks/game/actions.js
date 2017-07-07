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

const roomPlayersChange = (players) => ({
  type: types.ROOM_PLAYERS_CHANGE,
  payload: {
    players
  }
})

const leaveRoom = (room, player) => ({
  type: types.LEAVE_ROOM,
  payload: {
    room, player
  }
})

export default {
  createRoom,
  joinRoom,
  joiningRoomNotExist,
  roomChange,
  roomPlayersChange,
  leaveRoom
}
