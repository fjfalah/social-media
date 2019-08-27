import {
  GET_USER_ALBUM,
  GET_USER_ALBUM_F,
  GET_USER_ALBUM_R,
} from '../actionTypes'

export const actionGetUserAlbum = (userId) => ({
  type: GET_USER_ALBUM,
  payload: userId,
})

export const actionGetUserAlbumF = (data) => ({
  type: GET_USER_ALBUM_F,
  payload: data,
})

export const actionGetUserAlbumR = (error) => ({
  type: GET_USER_ALBUM_R,
  payload: error,
})
