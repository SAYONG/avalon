import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose'

import {gameActions} from '../../state/ducks/game'

const Lobby = (props) => {
  const {onCreateRoomClick, roomName, onRoomNameChange} = props
  return (
    <div name="lobby">
      <h1>Create or Join the room</h1>
      <input type="text" value={roomName} onChange={onRoomNameChange} />
      <button onClick={onCreateRoomClick}>Create</button>
    </div>
  )
}

const Lobby_composed = compose(
  withState('roomName', 'setRoomName', ''),
  withHandlers({
    onRoomNameChange: ({setRoomName}) => (event) => {
      const roomName = event.target.value
      setRoomName(roomName)
    },
    onCreateRoomClick: ({createRoom, roomName}) => () => {
      createRoom(roomName)
    }
  })
)(Lobby)

const Lobby_connected = connect(null, {
  createRoom: gameActions.createRoom
})(Lobby_composed)

export default Lobby_connected
