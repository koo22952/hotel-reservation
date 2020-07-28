import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import './index.scss'

function Input(props) {
  const [tel, setTel] = useState('')
  const [flag, setFlag] = useState(false)

  const onFocus = () => {
    setFlag(true)
  }

  const onBlur = () => {
    setFlag(false)
  }

  const handleInputChange = (e) => {
    setTel(e.target.value)
    console.log(e.target.value)
  }
  const { type } = props

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
        value={tel}
        onChange={handleInputChange}
      />
      {flag ? null : (
        <label id={'input-label'} htmlFor={type}>
          <i className="material-icons">{type}</i>
          {type}
        </label>
      )}
    </FormControl>
  )
}

export default Input
