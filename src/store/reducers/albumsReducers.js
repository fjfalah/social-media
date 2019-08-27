import {
  GET_USER_ALBUM,
  GET_USER_ALBUM_F,
  GET_USER_ALBUM_R,
} from '../actionTypes'

const initialState = {
  isLoading: false,
  list: null,
  errorMessage: null,
  selectedAlbum: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_USER_ALBUM:
    return {
      ...state,
      isLoading: true,
    }
  case GET_USER_ALBUM_F:
    return {
      ...state,
      isLoading: false,
      list: action.payload,
    }

  case GET_USER_ALBUM_R:
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    }
  default:
    return state
  }
}
