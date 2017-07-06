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

export default {
  createRoom,
  joinRoom,
  joiningRoomNotExist,
  roomChange
}
