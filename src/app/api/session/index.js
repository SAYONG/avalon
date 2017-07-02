import {auth as firebaseAuth} from 'firebase'
import {fbProvider} from '../../../firebase'

export function signInWithFB() {
  return firebaseAuth().signInWithRedirect(fbProvider)
}

export function signOut() {
  return firebaseAuth().signOut()
}

export default {
  signInWithFB,
  signOut
}
