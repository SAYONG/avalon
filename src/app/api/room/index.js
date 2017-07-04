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

export async function createNewRoom() {
  const pin = generateRoomPin(getRandomIntInclusive)
  const isExist = await isRoomExist(pin)
  console.debug('createNewRoom: isRoomExist?', pin, isExist)
}
