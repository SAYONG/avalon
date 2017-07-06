import R from 'ramda'

const roomLens = R.lensPath(['room'])
const roomPlayersLens = R.lensPath(['roomPlayers'])

export default {
  roomLens,
  roomPlayersLens
}
