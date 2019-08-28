import { combineReducers } from 'redux'
import postsReducers from './postsReducers'
import usersReducers from './usersReducers'
import albumsReducers from './albumsReducers'
import accountReducers from './accountReducers'
import commentsReducers from './commentsReducers'

export default combineReducers({
  posts: postsReducers,
  users: usersReducers,
  albums: albumsReducers,
  account: accountReducers,
  comments: commentsReducers,
})
