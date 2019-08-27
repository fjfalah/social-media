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

export const actionGetPostsAll = () => ({
  type: GET_POSTS_ALL,
})

export const actionGetPostsAllF = (data) => ({
  type: GET_POSTS_ALL_F,
  payload: data,
})

export const actionGetPostsAllR = (error) => ({
  type: GET_POSTS_ALL_R,
  payload: error,
})

export const actionGetPostsDetail = (postId) => ({
  type: GET_POSTS_DETAIL,
  payload: postId,
})

export const actionGetPostsDetailF = (data) => ({
  type: GET_POSTS_DETAIL_F,
  payload: data,
})

export const actionGetPostsDetailR = (error) => ({
  type: GET_POSTS_DETAIL_R,
  payload: error,
})

export const actionAddNewPost = (bodyReq) => ({
  type: ADD_NEW_POST,
  payload: bodyReq,
})

export const actionAddNewPostF = (data) => ({
  type: ADD_NEW_POST_F,
  payload: data,
})

export const actionAddNewPostR = (error) => ({
  type: ADD_NEW_POST_R,
  payload: error,
})
