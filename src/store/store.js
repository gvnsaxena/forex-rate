import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import fxapi from '../middleware/fxrate-api'
import rootReducer from '../reducers/reducer'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, fxapi)
    )
  )

  return store
}

export default configureStore
