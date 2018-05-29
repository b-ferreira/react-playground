import React from 'react'
import PropTypes from 'prop-types'

const PlaylistCard = ({ playlist, onSelect, isPlaying = false }) => {
  const { images, name } = playlist

  return (
    <figure className={'PlaylistCard ' + (isPlaying ? 'playing' : 'not-playing animated')}
            onClick={() => onSelect(playlist)}>
      <img className="PlaylistCard__image" src={images[0].url} alt={name} />
      <div className="PlaylistCard__play flex flex-centered">
        <span className="br4 fc--default b bg--spotify">
          { isPlaying ? '| |' : 'Play' }
        </span>
      </div>
    </figure>
  )
}

PlaylistCard.displayName = 'PlaylistCard'
PlaylistCard.propTypes = {
  playlist: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool
}

export default PlaylistCard
