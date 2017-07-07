import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'
import styled from 'styled-components'

import {sessionActions} from '../../state/ducks/session'
import {blue600} from '../base/colors'

const Container = styled.div`
  flex: 1;
  background-color: ${blue600};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SignInButton = styled.button`
  background-color: white;
  color: ${blue600};
`
const Logo = styled.h1`
  color: white;
`

const SignInForm = (props) => {
  const {onSignInFbClick} = props
  return (
    <Container name="sign-in-form">
      <Logo className="title">
        <span className="icon">
          <i className="fa fa-shield"></i>
        </span>
        <span>Avalonia</span>
      </Logo>
      <SignInButton onClick={onSignInFbClick}
        className="button">
        <span className="icon">
          <i className="fa fa-facebook-f"></i>
        </span>
        <span>Sign in with Facebook</span>
      </SignInButton>
    </Container>
  )
}

const SignInForm_composed = compose(
  withHandlers({
    onSignInFbClick: ({signInWithFb}) => event => {
      signInWithFb()
    }
  })
)(SignInForm)

const SignInForm_connected = connect(null, {
  signInWithFb: sessionActions.requestFbSignIn
})(SignInForm_composed)

export default SignInForm_connected
