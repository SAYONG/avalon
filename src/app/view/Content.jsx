import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import R from 'ramda'

import {routingLens} from '../state/ducks/routing'

import {Lobby} from './lobby'
import {Profile} from './profile'
import {SignInForm} from './signIn'

const Container = styled.section`
`

const Content = (props) => {
  const {view} = props

  return (
    <Container name="content">
      {view}
    </Container>
  )
}

const Content_connected = connect(state => {
  const routeName = R.view(routingLens.currentStateNameLens, state.routing)
  switch (routeName) {
    case 'lobby':
      return {view: <Lobby />}
    case 'profile':
      return {view: <Profile />}
    case 'signIn':
      return {view: <SignInForm />}

    default: return {}
  }
})(Content)

export default Content_connected
