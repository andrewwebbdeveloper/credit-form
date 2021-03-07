import React from 'react'
import InputGroup from './InputGroup'

function NameInput({
  label,
  name,
  type,
  addedGroupClasses,
  addedInputClasses,
  onChange,
  value
}) {
  return (
    <InputGroup 
        label={label}
        name={name}
        type={type}
        addedGroupClasses={addedGroupClasses}
        addedInputClasses={addedInputClasses}
        onChange={onChange}
        value={value}
       />
  )
}

export default NameInput
