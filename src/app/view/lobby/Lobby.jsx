import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose'

import {gameActions} from '../../state/ducks/game'

const Lobby = (props) => {
  const {onCreateRoomClick, roomName, onRoomNameChange} = props
  return (
    <div name="lobby">
      <h1>Create or Join the room</h1>
      <div className="field">
        <p className="control">
          <label className="label">Room Name</label>
          <input type="text"
            className="input"
            value={roomName}
            onChange={onRoomNameChange} />
        </p>
      </div>
      <button onClick={onCreateRoomClick}
        className="button">Create</button>
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
