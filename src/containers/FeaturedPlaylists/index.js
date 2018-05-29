import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PlaylistActions from '@/redux_modules/featuredPlaylists/actions'
import PlaylistList from '@/components/PlaylistList'
import PlaylistPlayer from '@/components/PlaylistPlayer'
import PlaylistFilter from '@/components/PlaylistFilter'
import Loader from '@/components/Loader'
import repoll from 'repoll'
import {
  playlistSelector, playlistIsLoadingSelector, playlistMessageSelector,
  playlistFilterConfigSelector, playlistFilterSelector, playlistErrorSelector
} from '@/redux_modules/featuredPlaylists/selectors'

@connect(state => ({
    playlists: playlistSelector(state),
    playlistError: playlistErrorSelector(state),
    isLoading: playlistIsLoadingSelector(state),
    message: playlistMessageSelector(state),
    filterConfigs: playlistFilterConfigSelector(state),
    currentFilter: playlistFilterSelector(state)
  }), dispatch => ({
    ...bindActionCreators({
      fetchList: PlaylistActions.fetchPlaylists,
      fetchFilters: PlaylistActions.fetchFilterConfig,
      updateFilter: PlaylistActions.updateFilter
    }, dispatch)
  })
)
@repoll({
  pollPlaylists: 30000
})
class FeaturedPlaylists extends Component {
  static propTypes = {
    showPlayer: PropTypes.bool,
    currentPlaylist: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      showPlayer: props.showPlayer || false,
      currentPlaylist: {}
    }
  }

  async componentDidMount () {
    await this.props.fetchList()
    await this.props.fetchFilters()
  }

  pollPlaylists = async () => {
    await this.props.fetchList(this.props.currentFilter)
  }

  itemSelectHandler = (item) => {
    this.setState({
      showPlayer: this.state.currentPlaylist !== item,
      currentPlaylist: this.state.currentPlaylist === item ? {} : item
    })
  }

  onFilterChange = async (id, value) => {
    const newFilter = {
      ...this.props.currentFilter,
      ...{ [id] : value }
    }
    await this.props.updateFilter(newFilter)
    await this.props.fetchList(newFilter)
  }

  render () {
    const { playlists, isLoading, message, filterConfigs, playlistError } = this.props
    const { showPlayer, currentPlaylist } = this.state
    return (
      <div className="FeaturedPlaylists">
        <div>
          <PlaylistFilter onFilterChange={this.onFilterChange} configList={filterConfigs} />
          {
            showPlayer && <PlaylistPlayer uri={currentPlaylist.uri} />
          }
          <span className="simple-message">{message ? message : '...'}</span>
          {
            isLoading
              ? ( <Loader /> )
              : (
                  <PlaylistList onItemSelect={this.itemSelectHandler} playlists={playlists}
                                currentPlaying={currentPlaylist} hasError={playlistError} />
                )
          }
        </div>
      </div>
    )
  }
}

export default FeaturedPlaylists
