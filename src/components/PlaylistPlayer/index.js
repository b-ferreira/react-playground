import React from 'react'
import PropTypes from 'prop-types'

const PlaylistPlayer = ({ uri }) => {
  return (
    <div className="PlaylistPlayer">
      {
        uri ? (
          <iframe title="Playlist Player"
                  src={`https://open.spotify.com/embed?uri=${uri}`}
                  allowtransparency="true" allow="encrypted-media">
          </iframe>
        ) : (
          <span className="simple-message">
            Hmmm... it seems that we're getting problems with this playlist... Sorry.
          </span>
        )
      }
    </div>
  )
}

PlaylistPlayer.displayName = 'PlaylistPlayer'
PlaylistPlayer.propTypes = {
  uri: PropTypes.string
}

export default PlaylistPlayer

