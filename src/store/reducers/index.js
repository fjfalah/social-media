import { combineReducers } from 'redux'
import postsReducers from './postsReducers'
import usersReducers from './usersReducers'
import albumsReducers from './albumsReducers'

export default combineReducers({
  posts: postsReducers,
  users: usersReducers,
  albums: albumsReducers,
})
