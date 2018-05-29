import React from 'react'
import { DropdownFilter, InputFilter } from './FilterControls'
import { SUPORTED_FILTERS } from './PlaylistFilterConstants'

const localChangeHandler = (val, id, callback) => {
  if (callback && typeof callback === 'function') {
    callback(id, val)
  }
}

const buildFilterComponent = ({ id, name, validation, values, changeHandler }) => {
  switch (id) {
    case SUPORTED_FILTERS.locale:
    case SUPORTED_FILTERS.country:
      return buildDropdown(id, {
        values,
        label: name,
        onChangeHandler: e => localChangeHandler(e, id, changeHandler)
      })
    case SUPORTED_FILTERS.timestamp:
      return buildInput(id, {
        validation,
        label: name,
        type: 'datetime-local',
        onChangeHandler: e => localChangeHandler(e, id, changeHandler)
      })
    case SUPORTED_FILTERS.limit:
    case SUPORTED_FILTERS.offset:
      return buildInput(id, {
        validation,
        label: name,
        type: 'number',
        onChangeHandler: e => localChangeHandler(e, id, changeHandler)
      })
    default:
      return null
  }
}

const buildDropdown = (id, props) => {
  return <DropdownFilter key={id} {...props} />
}

const buildInput = (id, props) => {
  return <InputFilter key={id} {...props} />
}

const PlaylistFilterFactory = config => buildFilterComponent(config)
export default PlaylistFilterFactory
