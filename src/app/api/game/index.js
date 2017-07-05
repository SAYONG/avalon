export function userToPlayer(user) {
  return {
    uid: user.uid,
    photoURL: user.photoURL,
    displayName: user.displayName
  }
}
