import sagas from './sagas'
import reducer from './reducer'

export {default as gameTypes} from './types'
export {default as gameActions} from './actions'
export {default as gameChannels} from './channels'
export {default as gameLens} from './lens'

export default {
  reducer,
  sagas
}
