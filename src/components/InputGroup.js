import React from 'react'

function InputGroup({
  inputId,
  label,
  type,
  name,
  pattern,
  value,
  groupClasses,
  labelClasses,
  inputClasses
}) {
  return (
    <div class={{groupClasses}}>
      <label 
        for={{name}}
        class={{labelClasses}}
        >
        {label}
      </label>
      <input 
        id={{inputId}}
        class={{inputClasses}}
        type={{type}}
        name={{name}}
        pattern={{pattern}}
        >
        {value}
        </input>
    </div>
  )
}

export default InputGroup
