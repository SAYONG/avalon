import React from 'react'
import styled from 'styled-components'

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
  const {player, isUser} = props
  return (
    <Container>
      <Img src={player.photoURL} />
      <InfoContainer>
        <span>{player.displayName}</span>
        {isUser && (
        <a className="button is-danger is-small">
          Leave
        </a>
        )}
      </InfoContainer>
    </Container>
  )
}

export default Player
