import { combineEpics } from 'redux-observable'
import postsEpics from '../epics/postsEpics'
import usersEpics from '../epics/usersEpics'

export default combineEpics(
  postsEpics.getPostsAllEpics,
  postsEpics.getPostDetailEpics,
  usersEpics.getUsersAllEpics,
  usersEpics.getUserDetailEpics
)
