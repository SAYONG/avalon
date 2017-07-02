import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps, withHandlers} from 'recompose'
import R from 'ramda'

import {sessionLens} from '../state/ducks/session'
import {routingActions} from '../state/ducks/routing'

const Header = (props) => {
  const {hasUser, onProfileClick} = props
  return (
    <nav name="header">
      {hasUser && (
        <a onClick={onProfileClick}>Profile</a>
      )}
    </nav>
  )
}

const Header_composed = compose(
  withProps(({user}) => ({
    hasUser: !!user
  })),
  withHandlers({
    onProfileClick: ({navigate}) => event => {
      navigate('profile')
    }
  })
)(Header)

const Header_connected = connect(state => {
  const user = R.view(sessionLens.userLens, state.session)
  return {
    user
  }
}, {
  navigate: routingActions.navigate
})(Header_composed)

export default Header_connected
