import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import './index.scss'

function Input (props) {
  const [flag, setFlag] = useState(false)

  const onFocus = () => {
    setFlag(true)
  }

  const onBlur = () => {
    setFlag(false)
  }

  const {type, handleInputChange, value} = props

  return (
    <FormControl
      id="room-reservation-input"
      fullWidth
      noValidate
      autoComplete="off"
    >
      <TextField
        id={type}
        variant="outlined"
        onFocus={onFocus}
        onBlur={onBlur}
        defaultValue={value}
        onChange={(e) => handleInputChange(e, type)}
      />
      {flag || value ? null : (
        <label id={'input-label'} htmlFor={type}>
          <i className="material-icons">{type}</i>
          {type}
        </label>
      )}
    </FormControl>
  )
}

export default Input
