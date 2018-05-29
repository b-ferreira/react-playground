import React from 'react'
import PropTypes from 'prop-types'
import PlaylistCard from '@/components/PlaylistCard'

const PlaylistList = ({ hasError = false, playlists, onItemSelect, currentPlaying = null }) => {
  const isPlaying = playlist => playlist === currentPlaying
  let content = null

  if (hasError) {
    content = <div className="error-container">
      <h2>Hmmm... We got a problem.</h2>
      <h2>Please, try another filter or reload</h2>
    </div>
  } else if (playlists && playlists.length > 0) {
    content = playlists.map(
      playlist => <PlaylistCard isPlaying={isPlaying(playlist)} onSelect={onItemSelect}
                                key={playlist.name} playlist={playlist} />
    )
  } else {
    content = <h1>Oops... No playlists found.</h1>
  }

  return (
    <div className="PlaylistList">
      {
        content
      }
    </div>
  )
}

PlaylistList.displayName = 'PlaylistList'
PlaylistList.propTypes = {
  playlists: PropTypes.array,
  onItemSelect: PropTypes.func.isRequired,
  currentPlaying: PropTypes.object
}

export default PlaylistList
