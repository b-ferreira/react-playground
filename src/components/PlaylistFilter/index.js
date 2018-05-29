import React from 'react'
import PropTypes from 'prop-types'
import PlaylistFilterFactory from './PlaylistFilterFactory'

const PlaylistFilter = ({ onFilterChange, configList }) => {
  return (
    <div className="PlaylistFilter">
      {
        configList && configList.map(
          config => PlaylistFilterFactory({...config, changeHandler: onFilterChange})
        )
      }
    </div>
  )
}

PlaylistFilter.displayName = 'PlaylistFilter'
PlaylistFilter.propTypes = {
  configList: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired
}

export default PlaylistFilter
