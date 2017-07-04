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

async function isRoomExist(pin) {
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

async function updateRoom(pin, data) {
  const ref = database().ref(`rooms/${pin}`)
  return ref.set(data)
}

export async function createNewRoom(users) {
  const pin = await findTheEmptyRoom()
  const room = {
    pin, players: users
  }
  return updateRoom(pin, room)
}
