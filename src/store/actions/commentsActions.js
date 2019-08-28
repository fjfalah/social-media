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

export const actionAddNewComment = (bodyReq) => ({
  type: ADD_NEW_COMMENT,
  payload: bodyReq,
})

export const actionAddNewCommentF = (data) => ({
  type: ADD_NEW_COMMENT_F,
  payload: data,
})

export const actionAddNewCommentR = (error) => ({
  type: ADD_NEW_COMMENT_R,
  payload: error,
})

export const actionEditComment = (bodyReq, postId) => ({
  type: EDIT_COMMENT,
  payload: { bodyReq, postId },
})

export const actionEditCommentF = (data) => ({
  type: EDIT_COMMENT_F,
  payload: data,
})

export const actionEditCommentR = (error) => ({
  type: EDIT_COMMENT_R,
  payload: error,
})

export const actionDeleteComment = (postId) => ({
  type: DELETE_COMMENT,
  payload: postId,
})

export const actionDeleteCommentF = (data) => ({
  type: DELETE_COMMENT_F,
  payload: data,
})

export const actionDeleteCommentR = (error) => ({
  type: DELETE_COMMENT_R,
  payload: error,
})
