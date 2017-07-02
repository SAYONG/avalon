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

export default {
  authStateChange,
  requestFbSignIn
}
