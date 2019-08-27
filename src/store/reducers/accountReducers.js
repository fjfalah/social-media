import {
  GET_ACCOUNT_DATA,
  GET_ACCOUNT_DATA_F,
  GET_ACCOUNT_DATA_R,
} from '../actionTypes'

const initialState = {
  data: null,
  isLoading: false,
  errorMessage: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_ACCOUNT_DATA:
    return {
      ...state,
      isLoading: true,
    }
  case GET_ACCOUNT_DATA_F:
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    }
  case GET_ACCOUNT_DATA_R:
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    }
  default:
    return state
  }
}
