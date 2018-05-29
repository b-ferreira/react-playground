import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PRIMITIVE_TYPES } from '@/components/PlaylistFilter/PlaylistFilterConstants'
import moment from 'moment'
import { debounce } from 'lodash'

class InputFilter extends Component {
  static propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validation: PropTypes.object,
    onChangeHandler: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
    this.validate = debounce(e => {
      const { value } = e.target || {}
      const { validation, onChangeHandler } = this.props

      this.setState({
        hasError: false
      })

      if (!value || value === '') {
        onChangeHandler(null)
      } else {
        if (!validation) {
          onChangeHandler(value)
        } else {
          const { primitiveType, min, max } = validation

          switch (primitiveType) {
            case PRIMITIVE_TYPES.integer:
              if (min && max && (value < min || value > max)) {
                this.setState({
                  hasError: true
                })
              } else {
                onChangeHandler(value)
              }
              break
            case PRIMITIVE_TYPES.string:
              const newVal = moment(value).format()
              onChangeHandler(newVal)
              break
            default:
              onChangeHandler(value)
              break
          }
        }
      }
    } , 1500)
  }

  render () {
    const { type, label, placeholder, validation } = this.props
    const { min, max } = validation
    const { hasError } = this.state
    return (
      <div className="input-container">
        {
          label && <label className="input-label">{label}</label>
        }
        <input className="simple-input" type={type} placeholder={placeholder}
               min={min} max={max} onChange={e => {
                e.persist()
                this.validate(e)
              }} />
        {
          hasError &&
          <span className="input-container-error">
            Invalid value for this filter
          </span>
        }
      </div>
    )
  }
}

export default InputFilter
