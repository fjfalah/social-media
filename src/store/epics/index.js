import { combineEpics } from 'redux-observable'
import postsEpics from '../epics/postsEpics'

export default combineEpics(
  postsEpics.getPostsAllEpics,
  postsEpics.getPostDetailEpics
)
