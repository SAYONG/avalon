import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose'

import {gameActions} from '../../state/ducks/game'

const Lobby = (props) => {
  const {room,
    onCreateRoomClick, onJoinRoomSubmit, onRoomChange} = props
  return (
    <div name="lobby">
      <h1>Create or Join the room</h1>
      <button onClick={onCreateRoomClick}
        className="button">Create</button>
      <form onSubmit={onJoinRoomSubmit}>
        <div className="field has-addons">
          <p className="control">
            <input type="number" className="input"
              value={room} onChange={onRoomChange}
              placeholder="4-Digits Pin"/>
          </p>
          <p className="control">
            <a className="button is-primary">
              Join
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

const Lobby_composed = compose(
  withState('room', 'setRoom', ''),
  withHandlers({
    onRoomChange: ({setRoom}) => event => {
      setRoom(event.target.value)
    },
    onCreateRoomClick: ({createRoom}) => () => {
      createRoom()
    },
    onJoinRoomSubmit: ({joinRoom, room}) => (event) => {
      event.preventDefault()
      joinRoom(room)
    }
  })
)(Lobby)

const Lobby_connected = connect(null, {
  createRoom: gameActions.createRoom,
  joinRoom: gameActions.joinRoom
})(Lobby_composed)

export default Lobby_connected
