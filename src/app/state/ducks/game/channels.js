import {eventChannel} from 'redux-saga'
// TODO: refactor to API?
import {database} from 'firebase'

function playerRoom(uid) {
  return eventChannel(emitter => {
    const onRoomChange = snapshot => {
      emitter({room: snapshot.val()})
    }
    const ref = database().ref(`player-room/${uid}`)
    ref.on('value', onRoomChange)

    return () => {
      ref.off('value', onRoomChange)
    }
  })
}

function roomPlayers(room) {
  return eventChannel(emitter => {
    const onChange = snapshot => {
      emitter({room, players: snapshot.val()})
    }
    const ref = database().ref(`room-players/${room}`)
    .orderByKey()
    ref.on('value', onChange)
    return () => {
      ref.off('value', onChange)
    }
  })
}

export default {
  playerRoom,
  roomPlayers
}