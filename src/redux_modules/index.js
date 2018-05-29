import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import FeaturedPlaylistsReducer from './featuredPlaylists'

export default combineReducers({
  featuredPlaylists: FeaturedPlaylistsReducer,
  router: routerReducer
})
