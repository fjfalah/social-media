import {
  GET_USERS_ALL,
  GET_USERS_ALL_F,
  GET_USERS_ALL_R,
  GET_USER_DETAIL,
  GET_USER_DETAIL_F,
  GET_USER_DETAIL_R,
} from '../actionTypes'

const initialState = {
  isLoading: false,
  list: null,
  errorMessage: null,
  selectedUser: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_USERS_ALL:
    return {
      ...state,
      isLoading: true,
    }
  case GET_USERS_ALL_F:
    return {
      ...state,
      isLoading: false,
      list: action.payload,
    }
  case GET_USER_DETAIL:
    return {
      ...state,
      isLoading: true,
      selectedUser: null,
    }
  case GET_USER_DETAIL_F:
    return {
      ...state,
      isLoading: false,
      selectedUser: action.payload,
    }
  case GET_USERS_ALL_R:
  case GET_USER_DETAIL_R:
    return {
      ...state,
      errorMessage: action.payload,
    }
  default:
    return state
  }
}
