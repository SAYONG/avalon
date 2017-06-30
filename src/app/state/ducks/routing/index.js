import reducer from './reducer'
import sagas from './sagas'

export {default as routingTypes} from './types'
export {default as routingActions} from './actions'
export {default as routingLens} from './lens'

export default {
  reducer,
  sagas
}
