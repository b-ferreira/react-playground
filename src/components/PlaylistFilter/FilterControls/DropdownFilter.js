import React from 'react'

const DropdownFilter = ({ label, values, onChangeHandler }) => {
  const changeHandler = e => {
    const { value } = e.target || {}
    onChangeHandler(value)
  }

  return (
    <div className="input-container">
      {
        label && <label className="input-label">{label}</label>
      }
      <select className="simple-input" defaultValue="" onChange={e => changeHandler(e)} >
        <option value="" disabled>{label}</option>
        {
          values && values.map( option => (
            <option key={option.value} value={option.value}>
              { option.name }
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default DropdownFilter
