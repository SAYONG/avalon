import {auth as firebaseAuth} from 'firebase'
import {fbProvider} from '../../../firebase'

export function signInWithFB() {
  return firebaseAuth().signInWithRedirect(fbProvider)
}
