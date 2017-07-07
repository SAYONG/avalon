import React from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import styled from 'styled-components'

import {gameLens} from '../../state/ducks/game'
import {sessionLens} from '../../state/ducks/session'

import Player from './Player'
import {PageContainer} from '../base/container'
import {primary} from '../base/colors'

const Title = styled.h3`
  color: ${primary};
  margin-bottom: 0.25rem !important;
`
const InviteMsg = styled.p`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
const InviteMsgIcon = styled.i`
  font-size: 0.75rem;
  margin-right: 0.5rem;
`
const PlayerContainer = styled.div`
  margin-bottom: 1rem;
`

const Room = (props) => {
  const {room, players, user} = props
  return (
    <PageContainer name="room">
      <h5 className="subtitle is-5">Game Room</h5>
      <Title className="title is-3">
        {room}
      </Title>
      <InviteMsg>
        <InviteMsgIcon className="fa fa-key"></InviteMsgIcon>
        <span>
          use room number to let your friends join this room
        </span>
      </InviteMsg>
      <h5 className="title is-5">
        Players
      </h5>
      {players.map(p => (
        <PlayerContainer key={p.uid}>
            <Player player={p} isUser={p.uid === user.uid} />
        </PlayerContainer>
      ))}
    </PageContainer>
  )
}

const Room_connected = connect(state => {
  return {
    user: R.view(sessionLens.userLens, state.session),
    players: R.view(gameLens.roomPlayersLens, state.game) || []
  }
})(Room)

export default Room_connected
