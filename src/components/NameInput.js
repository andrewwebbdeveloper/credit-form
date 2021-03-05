import React from 'react'
import InputGroup from './InputGroup'

function NameInput({
  label,
  name,
  type,
  addedGroupClasses,
  onChange,
  value
}) {
  return (
    <InputGroup 
        label={label}
        name={name}
        type={type}
        addedGroupClasses={addedGroupClasses}
        onChange={onChange}
        value={value}
       />
  )
}

export default NameInput
