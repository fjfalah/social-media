/* eslint-disable import/no-cycle */
import { combineEpics } from 'redux-observable'
import postsEpics from './postsEpics'
import usersEpics from './usersEpics'
import albumsEpics from './albumsEpics'
import accountEpics from './accountEpics'

export default combineEpics(
  postsEpics.getPostsAllEpics,
  postsEpics.getPostDetailEpics,
  postsEpics.addNewPostEpics,
  postsEpics.editPostEpics,
  usersEpics.getUsersAllEpics,
  usersEpics.getUserDetailEpics,
  albumsEpics.getUserAlbumsEpics,
  albumsEpics.getUserPhotosEpics,
  accountEpics.getAccountDataEpics,
)
