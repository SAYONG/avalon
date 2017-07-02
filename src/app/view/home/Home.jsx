import React from 'react'
import {connect} from 'react-redux'

import {SignInForm} from '../profile'

const Home = (props) => {
  const {hasUser} = props
  return (
    <div name="home">
    {!hasUser && (
      <SignInForm />
    )}
    </div>
  )
}

function stateToProps(state) {
  return {
    hasUser: false
  }
}

const Home_connected = connect(stateToProps)(Home)

export default Home_connected
