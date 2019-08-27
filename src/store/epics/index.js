import { combineEpics } from 'redux-observable'
import postsEpics from './postsEpics'
import usersEpics from './usersEpics'
import albumsEpics from './albumsEpics'

export default combineEpics(
  postsEpics.getPostsAllEpics,
  postsEpics.getPostDetailEpics,
  usersEpics.getUsersAllEpics,
  usersEpics.getUserDetailEpics,
  albumsEpics.getUserAlbumsEpics,
  albumsEpics.getUserPhotosEpics
)
