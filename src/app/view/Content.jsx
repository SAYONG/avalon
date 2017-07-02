import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import R from 'ramda'

import {routingLens} from '../state/ducks/routing'

import {Home} from './home'
import {Profile} from './profile'

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
    case 'home':
      return {view: <Home />}
    case 'profile':
      return {view: <Profile />}

    default: return {}
  }
})(Content)

export default Content_connected
