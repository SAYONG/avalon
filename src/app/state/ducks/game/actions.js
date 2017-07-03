import types from './types'

const createRoom = (roomName) => ({
  type: types.CREATE_ROOM,
  payload: {
    roomName
  }
})

export default {
  createRoom
}
