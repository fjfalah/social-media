import { combineEpics } from 'redux-observable'
import postsEpics from '../epics/postsEpics'
import usersEpics from '../epics/usersEpics'
import albumsEpics from '../epics/albumsEpics'

export default combineEpics(
  postsEpics.getPostsAllEpics,
  postsEpics.getPostDetailEpics,
  usersEpics.getUsersAllEpics,
  usersEpics.getUserDetailEpics,
  albumsEpics.getUserAlbumsEpics,
  albumsEpics.getUserPhotosEpics
)
