import * as types from './types'

const initialState = {
  message: null,
  playlists: [],
  playlistError: null,
  playlistFilter: {},
  playlistFilterError: null,
  playlistFilterConfig: [],
  playlistIsLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PLAYLISTS_FETCH:
      return {
        ...state, playlistIsLoading: true
      }
    case types.PLAYLISTS_FETCH_SUCCESS:
      return {
        ...state,
        ...action.response,
        playlistIsLoading: false,
        playlistError: false
      }
    case types.PLAYLISTS_FETCH_ERROR:
      return {
        ...state,
        playlistIsLoading: false,
        playlistError: action.error
      }
    case types.FILTER_CONFIG_FETCH_SUCCESS:
      return {
        ...state,
        playlistFilterConfig: action.config.filters
      }
    case types.FILTER_CONFIG_FETCH_ERROR:
      return {
        ...state,
        playlistFilterError: action.error
      }
    case types.FILTER_UPDATE:
      return {
        ...state,
        playlistFilter: action.filter
      }
    default:
      return state
  }
}
