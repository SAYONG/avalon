import {database} from 'firebase'

export function userToPlayer(user) {
  return {
    uid: user.uid,
    photoURL: user.photoURL,
    displayName: user.displayName
  }
}

export async function registerOnlinePlayer(player) {
  const ref = database().ref()
  const updates = {
    [`online-players/${player.uid}`]: player
  }
  return ref.update(updates)
}

export default {
  userToPlayer,
  registerOnlinePlayer
}
