import R from 'ramda'
import {database} from 'firebase'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export function generateRoomPin(random) {
  const randomValue = random(0, 9999)
  return R.pipe(
    R.concat('0000'),
    R.takeLast(4)
  )(`${randomValue}`)
}

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
