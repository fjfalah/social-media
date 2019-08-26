import {
  GET_POSTS_ALL,
  GET_POSTS_ALL_F,
  GET_POSTS_ALL_R,
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
