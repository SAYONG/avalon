import React from 'react'
import {connect} from 'react-redux'
import R from 'ramda'

import {gameLens} from '../../state/ducks/game'

import Player from './Player'

const Room = (props) => {
  const {room, players} = props
  return (
    <div name="room">
      <h1 className="title is-1">
        Room: {room}
      </h1>
      <div>
        {players.map(p => (
          <Player player={p} key={p.uid} />
        ))}
      </div>
    </div>
  )
}

const Room_connected = connect(state => {
  return {
    players: R.view(gameLens.roomPlayersLens, state.game) || []
  }
})(Room)

export default Room_connected
