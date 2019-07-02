import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import auth from './auth/reducer'

// ------- logger will show actions dispatched and the state inside of the browser
const logger = createLogger({
  collapsed: true
})

const store = createStore(
  combineReducers({ auth }),
  applyMiddleware(thunk, logger)
)

export default store
