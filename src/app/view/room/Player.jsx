import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {compose, withHandlers} from 'recompose'

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Img = styled.img`
  width: 60px;
  border-radius: 50%;
  margin-right: 1rem;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Player = (props) => {
  const {player, isUser,
    onLeaveClick} = props
  return (
    <Container>
      <Img src={player.photoURL} />
      <InfoContainer>
        <span>{player.displayName}</span>
        {isUser && (
        <a className="button is-danger is-small"
          onClick={onLeaveClick}>
          Leave
        </a>
        )}
      </InfoContainer>
    </Container>
  )
}

const Player_composed = compose(
  withHandlers({
    onLeaveClick: ({player, onPlayerLeave}) => () => {
      onPlayerLeave(player)
    }
  })
)(Player)

Player_composed.propTypes = {
  player: PropTypes.object.isRequired,
  isUser: PropTypes.bool,
  onPlayerLeave: PropTypes.func.isRequired
}

export default Player_composed
