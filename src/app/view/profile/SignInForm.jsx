import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'

import {sessionActions} from '../../state/ducks/session'

const SignInForm = (props) => {
  const {onSignInFbClick} = props
  return (
    <div name="sign-in-form">
      <button onClick={onSignInFbClick}>Sign in with Facebook</button>
    </div>
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
