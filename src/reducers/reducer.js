import merge from 'lodash/merge';
import { combineReducers } from 'redux';

const ExRateSymbols = (state = {}, action) => {
  switch (action.type) {
    case 'API_REQUEST':
    case 'API_SUCCESS':
      return merge({}, state, action.response)
      
    default:
      return state;
  }
}

const FxSymbolValue = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FX_VALUE':
    return {
        value:action.response
      }

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  ExRateSymbols,
  FxSymbolValue
})

export default rootReducer