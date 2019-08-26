import {
  GET_POSTS_ALL,
  GET_POSTS_ALL_F,
  GET_POSTS_ALL_R,
} from '../actionTypes'

const initialState = {
  isLoading: false,
  posts: null,
  errorMessage: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_POSTS_ALL:
    return {
      isLoading: true,
    }
  case GET_POSTS_ALL_F:
    return {
      ...state,
      isLoading: false,
      posts: action.payload,
    }
  case GET_POSTS_ALL_R:
    return {
      ...state,
      errorMessage: action.payload,
    }
  default:
    return state
  }
}
