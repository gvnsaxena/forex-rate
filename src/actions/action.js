import { CALL_API } from '../middleware/fxrate-api'
import {API_REQUEST, API_SUCCESS, API_ERROR, SET_FX_VALUE} from '../constants/constant'

const FxRate = () => ({
    [CALL_API]: {
      types: [API_REQUEST, API_SUCCESS, API_ERROR]
    }
})

export const loadFxRate = () => (dispatch) => {
    return dispatch(FxRate())
}
export const setFxValue = (value, requiredFields=[]) => (dispatch) => {
    return dispatch({response:{value: value, requiredFields},  type: SET_FX_VALUE});
}