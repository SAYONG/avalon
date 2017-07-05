import {eventChannel} from 'redux-saga'
// TODO: refactor to API?
import {database} from 'firebase'

function playerRoom(uid) {
  return eventChannel(emitter => {
    const onRoomChange = snapshot => {
      emitter({room: snapshot.val()})
    }
    const ref = database().ref(`user-room/${uid}`)
    ref.on('value', onRoomChange)

    return () => {
      ref.off('value', onRoomChange)
    }
  })
}

export default {
  playerRoom
}