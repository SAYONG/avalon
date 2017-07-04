import {database} from 'firebase'

export function createNewRoom(roomName) {
  // 1. get available pin
  // 2. construct room data
  // 3. update firebase database
  const rooms = database().ref('rooms')
  const roomKey = rooms.push().key
  return rooms.update({
    [roomKey]: {
      name: roomName,
      pin: '2345' // TODO: Auto generate and check availability
    }
  })
}
