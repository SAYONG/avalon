import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'

import {sessionActions} from '../../state/ducks/session'

const Profile = (props) => {

  const {onSignOutClick} = props

  return (
    <div name="profile">
      <button onClick={onSignOutClick}>Sign out</button>
    </div>
  )
}

const Profile_composed = compose(
  withHandlers({
    onSignOutClick: ({signOut}) => event => {
      signOut()
    }
  })
)(Profile)

const Profile_connected = connect(null, {
  signOut: sessionActions.signOut
})(Profile_composed)

export default Profile_connected
