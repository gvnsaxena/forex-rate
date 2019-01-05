import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import fxapi from '../middleware/fxrate-api'
import {ExRateSymbols} from '../reducers/reducer'

const configureStore = preloadedState => {
  const store = createStore(
    ExRateSymbols,
    preloadedState,
    compose(
      applyMiddleware(thunk, fxapi)
    )
  )

  return store
}

export default configureStore
