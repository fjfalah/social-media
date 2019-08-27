import {
  GET_ACCOUNT_DATA,
  GET_ACCOUNT_DATA_F,
  GET_ACCOUNT_DATA_R,
} from '../actionTypes'

export const actionGetAccountData = (id) => ({
  type: GET_ACCOUNT_DATA,
  payload: id,
})

export const actionGetAccountDataF = (data) => ({
  type: GET_ACCOUNT_DATA_F,
  payload: data,
})

export const actionGetAccountDataR = (error) => ({
  type: GET_ACCOUNT_DATA_R,
  payload: error,
})
