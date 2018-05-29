import FeaturedPlaylistsService from '@/services/FeaturedPlaylists'
import * as types from './types'

export const playlistFetchError = error => ({
  type: types.PLAYLISTS_FETCH_ERROR,
  error
})

export const playlistFetchSuccess = response => ({
  type: types.PLAYLISTS_FETCH_SUCCESS,
  response
})

export const filterFetchSuccess = config => ({
  type: types.FILTER_CONFIG_FETCH_SUCCESS,
  config
})

export const filterFetchError = error => ({
  type: types.FILTER_CONFIG_FETCH_ERROR,
  error
})

export const fetchPlaylists = filters => async dispatch => {
  dispatch({ type: types.PLAYLISTS_FETCH })
  try {
    const { data } = await FeaturedPlaylistsService.fetchList(filters)
    dispatch(playlistFetchSuccess(data))
  } catch (err) {
    dispatch(playlistFetchError(true))
  }
}

export const fetchFilterConfig = () => async dispatch => {
  try {
    const { data } = await FeaturedPlaylistsService.fetchFilters()
    dispatch(filterFetchSuccess(data))
  } catch (err) {
    dispatch(filterFetchError(err))
  }
}

export const updateFilter = filter => ({
  type: types.FILTER_UPDATE,
  filter
})
