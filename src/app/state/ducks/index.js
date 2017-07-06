import routing from './routing'
import session from './session'
import game from './game'

const reducers = Object.assign(
  {},
  routing.reducer,
  session.reducer,
  game.reducer
)

const sagas = [].concat(
  routing.sagas,
  session.sagas,
  game.sagas
)

export default {
  reducers,
  sagas
}
