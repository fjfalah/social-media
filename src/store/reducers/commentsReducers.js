import {
  ADD_NEW_COMMENT,
  ADD_NEW_COMMENT_F,
  ADD_NEW_COMMENT_R,
  EDIT_COMMENT,
  EDIT_COMMENT_F,
  EDIT_COMMENT_R,
  DELETE_COMMENT,
  DELETE_COMMENT_F,
  DELETE_COMMENT_R,
} from '../actionTypes'

const initialState = {
  isLoadingEvent: false,
  errorMessage: null,
  selectedComment: null,
  lastEdited: null,
  lastDeletedId: null,
  newComment: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case ADD_NEW_COMMENT:
    return {
      ...state,
      isLoadingEvent: true,
    }
  case ADD_NEW_COMMENT_F:
    return {
      ...state,
      isLoadingEvent: false,
      newComment: action.payload,
    }
  case EDIT_COMMENT:
    return {
      ...state,
      isLoadingEvent: true,
    }
  case EDIT_COMMENT_F:
    return {
      ...state,
      isLoadingEvent: false,
      lastEdited: action.payload,
    }

  case DELETE_COMMENT:
    return {
      ...state,
      isLoadingEvent: true,
    }
  case DELETE_COMMENT_F:
    return {
      ...state,
      isLoadingEvent: false,
      lastDeletedId: action.payload,
    }
  case ADD_NEW_COMMENT_R:
  case EDIT_COMMENT_R:
  case DELETE_COMMENT_R:
    return {
      ...state,
      isLoadingEvent: false,
      errorMessage: action.payload,
    }
  default:
    return state
  }
}
