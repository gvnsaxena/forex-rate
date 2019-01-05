import { CALL_API } from '../middleware/fxrate-api'
import {API_REQUEST, API_SUCCESS, API_ERROR} from '../constants/constant'

const FxRate = () => ({
    [CALL_API]: {
      types: [API_REQUEST, API_SUCCESS, API_ERROR]
    }
})

export const loadFxRate = (dispatch) => {
    return dispatch.dispatch(FxRate())
}

export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})