import React from 'react'
import {connect} from 'react-redux'
import {compose, withProps, withHandlers} from 'recompose'
import R from 'ramda'
import styled from 'styled-components'

import {sessionLens} from '../state/ducks/session'
import {routingActions} from '../state/ducks/routing'
import {blue600} from './base/colors'

const Nav = styled.nav`
  padding: 0.5rem;
  display: flex;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.2);
  background-color: ${blue600}
`
const Logo = styled.h1`
  color: white;
  margin-bottom: 0 !important;
`
const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const ProfileMenuLink = styled.a`
  display: flex;
`
const ProfileMenuImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const Header = (props) => {
  const {hasUser, user, onProfileClick} = props
  return (
    <Nav name="header">
      <Logo className="title is-3">
        <span className="icon">
          <i className="fa fa-shield"></i>
        </span>
        <span>
          Avalonia
        </span>
      </Logo>
      <Menu>
      {hasUser && (
        <ProfileMenuLink onClick={onProfileClick}>
          <ProfileMenuImage src={user.photoURL} />
        </ProfileMenuLink>
      )}
      </Menu>
    </Nav>
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
