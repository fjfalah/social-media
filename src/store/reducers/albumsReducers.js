import {
  GET_USER_ALBUM,
  GET_USER_ALBUM_F,
  GET_USER_ALBUM_R,
  GET_USER_PHOTO,
  GET_USER_PHOTO_F,
  GET_USER_PHOTO_R,
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
  case GET_USER_PHOTO:
    return {
      ...state,
      isLoading: true,
      selectedAlbum: null,
    }
  case GET_USER_PHOTO_F:
    return {
      ...state,
      isLoading: false,
      selectedAlbum: action.payload,
    }
  case GET_USER_ALBUM_R:
  case GET_USER_PHOTO_R:
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    }
  default:
    return state
  }
}
