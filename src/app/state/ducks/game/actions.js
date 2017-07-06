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

export default {
  createRoom,
  joinRoom
}
