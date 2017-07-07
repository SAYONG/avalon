import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose'
import styled from 'styled-components'

import {gameActions} from '../../state/ducks/game'

import {PageContainer} from '../base/container'

const Container = PageContainer.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`
const Msg = styled.p`
  text-align: center;
`
const SeparatorMsg = Msg.extend`
  margin: 2rem 0 !important;
`

const Lobby = (props) => {
  const {room,
    onCreateRoomClick, onJoinRoomSubmit, onRoomChange} = props
  return (
    <Container name="lobby">
      <Msg className="title is-4">
        Start a new game and let your friends join
      </Msg>
      <button onClick={onCreateRoomClick}
        className="button is-primary">Create New Room</button>
      <SeparatorMsg className="subtitle is-5">
        &mdash; OR &mdash;
      </SeparatorMsg>
      <Msg className="title is-4">
        Join your friend room
      </Msg>
      <form onSubmit={onJoinRoomSubmit}>
        <div className="field has-addons">
          <p className="control">
            <input type="number" className="input"
              value={room} onChange={onRoomChange}
              placeholder="4-Digits Pin"/>
          </p>
          <p className="control">
            <button className="button is-primary">
              Join
            </button>
          </p>
        </div>
      </form>
    </Container>
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
