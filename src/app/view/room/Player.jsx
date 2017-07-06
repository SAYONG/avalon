import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Img = styled.img`
  border-radius: 50%;
  margin-right: 1rem;
`

const Player = (props) => {
  const {player} = props
  return (
    <Container>
      <Img src={player.photoURL} />
      <span>{player.displayName}</span>
    </Container>
  )
}

export default Player
