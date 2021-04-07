import { combineReducers } from 'redux'
import eventReducer from '../../features/events/eventreducer'
import testReducer from '../../features/reducers/testReducer'

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
})

export default rootReducer
