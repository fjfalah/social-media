import {
  GET_USERS_ALL,
  GET_USERS_ALL_F,
  GET_USERS_ALL_R,
  GET_USER_DETAIL,
  GET_USER_DETAIL_F,
  GET_USER_DETAIL_R,
} from '../actionTypes'

export const actionGetUsersAll = () => ({
  type: GET_USERS_ALL,
})

export const actionGetUsersAllF = (data) => ({
  type: GET_USERS_ALL_F,
  payload: data,
})

export const actionGetUsersAllR = (error) => ({
  type: GET_USERS_ALL_R,
  payload: error,
})

export const actionGetUserDetail = (userId) => ({
  type: GET_USER_DETAIL,
  payload: userId,
})

export const actionGetUserDetailF = (data) => ({
  type: GET_USER_DETAIL_F,
  payload: data,
})

export const actionGetUserDetailR = (error) => ({
  type: GET_USER_DETAIL_R,
  payload: error,
})
