import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'

import {gameActions} from '../../state/ducks/game'

const Lobby = (props) => {
  const {onCreateRoomClick} = props
  return (
    <div name="lobby">
      <h1>Create or Join the room</h1>
      <button onClick={onCreateRoomClick}>Create</button>
    </div>
  )
}

const Lobby_composed = compose(
  withHandlers({
    onCreateRoomClick: ({createRoom}) => () => {
      createRoom('Temp')
    }
  })
)(Lobby)

const Lobby_connected = connect(null, {
  createRoom: gameActions.createRoom
})(Lobby_composed)

export default Lobby_connected
