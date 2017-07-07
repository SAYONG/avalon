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

export async function isRoomExist(pin) {
  const ref = database().ref(`rooms/${pin}`)
  return ref.once('value')
  .then(snapshot => {
    return !!snapshot.val()
  })
}

async function findTheEmptyRoom() {
  const find = () => {
    const pin = generateRoomPin(getRandomIntInclusive)
    return isRoomExist(pin)
    .then(isExist => isExist? find(): pin)
  }
  return find()
}

export async function createNewRoom(player) {
  const pin = await findTheEmptyRoom()
  const room = {
    pin, players: [player]
  }
  const updates = {
    [`rooms/${pin}`]: room,
    [`player-room/${player.uid}`]: pin
  }
  return database().ref().update(updates)
}

export async function joinRoom(player, room) {
  const playerKey = database().ref(`room-players/${room}`).push().key
  const updates = {
    [`player-room/${player.uid}`]: room,
    [`room-players/${room}/${playerKey}`]: player
  }
  return database().ref().update(updates)
}

export async function leaveRoom(room, playerUid, playerKey) {
  const updates = {
    [`player-room/${playerUid}`]: null,
    [`room-players/${room}/${playerKey}`]: null
  }
  return database().ref().update(updates)
}

export default {
  joinRoom,
  leaveRoom
}
