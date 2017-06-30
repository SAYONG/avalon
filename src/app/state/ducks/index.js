import routing from './routing'

const reducers = Object.assign(
  {},
  routing.reducer,
)

const sagas = [].concat(
  routing.sagas,
)

export default {
  reducers,
  sagas
}
