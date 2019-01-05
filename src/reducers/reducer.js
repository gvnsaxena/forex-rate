import merge from 'lodash/merge';

export const ExRateSymbols = (state = [], action) => {
  if (action.response && action.response) {
    return merge({}, state, action.response)
  }

  return state
}