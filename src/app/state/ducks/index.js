import routing from './routing'
import session from './session'

const reducers = Object.assign(
  {},
  routing.reducer,
)

const sagas = [].concat(
  routing.sagas,
  session.sagas
)

export default {
  reducers,
  sagas
}
