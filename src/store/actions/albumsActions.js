import {
  GET_USER_ALBUM,
  GET_USER_ALBUM_F,
  GET_USER_ALBUM_R,
  GET_USER_PHOTO,
  GET_USER_PHOTO_F,
  GET_USER_PHOTO_R,
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

export const actionGetUserPhoto = (albumId) => ({
  type: GET_USER_PHOTO,
  payload: albumId,
})

export const actionGetUserPhotoF = (data) => ({
  type: GET_USER_PHOTO_F,
  payload: data,
})

export const actionGetUserPhotoR = (error) => ({
  type: GET_USER_PHOTO_R,
  payload: error,
})
