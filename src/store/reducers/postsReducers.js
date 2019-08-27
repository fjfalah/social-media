import {
  GET_POSTS_ALL,
  GET_POSTS_ALL_F,
  GET_POSTS_ALL_R,
  GET_POSTS_DETAIL,
  GET_POSTS_DETAIL_F,
  GET_POSTS_DETAIL_R,
  ADD_NEW_POST,
  ADD_NEW_POST_F,
  ADD_NEW_POST_R,
} from '../actionTypes'

const initialState = {
  isLoading: false,
  isLoadingEvent: false,
  list: null,
  errorMessage: null,
  selectedPost: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_POSTS_ALL:
    return {
      ...state,
      isLoading: true,
    }
  case GET_POSTS_ALL_F:
    return {
      ...state,
      isLoading: false,
      list: action.payload,
    }
  case GET_POSTS_DETAIL:
    return {
      ...state,
      isLoading: true,
      selectedPost: null,
    }
  case GET_POSTS_DETAIL_F:
    return {
      ...state,
      isLoading: false,
      selectedPost: action.payload,
    }
  case ADD_NEW_POST:
    return {
      ...state,
      isLoadingEvent: true,
    }
  case ADD_NEW_POST_F:
    return {
      ...state,
      isLoadingEvent: false,
      list: [...state.list, action.payload],
    }
  case GET_POSTS_ALL_R:
  case GET_POSTS_DETAIL_R:
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    }
  case ADD_NEW_POST_R:
    return {
      ...state,
      isLoadingEvent: false,
    }
  default:
    return state
  }
}
