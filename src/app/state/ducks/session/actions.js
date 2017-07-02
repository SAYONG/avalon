import types from './types'

const authStateChange = (user) => ({
  type: types.AUTH_STATE_CHANGE,
  payload: {
    user
  }
})

const requestFbSignIn = () => ({
  type: types.REQUEST_FB_SIGN_IN
})

const signOut = () => ({
  type: types.SIGN_OUT
})

export default {
  authStateChange,
  requestFbSignIn,
  signOut
}
