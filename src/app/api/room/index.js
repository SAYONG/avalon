import {database} from 'firebase'

export function createNewRoom(roomName) {
  const rooms = database().ref('rooms')
  const key = rooms.push().key
  return rooms.update({
    [key]: {
      name: roomName
    }
  })
}
