import React from 'react'

function InputGroup({
  inputId,
  label,
  type,
  name,
  pattern,
  value = '',
  // formattedValue = (value) => ,
  placeholder,
  addedGroupClasses,
  addedLabelClasses,
  addedInputClasses
}) {

  const makeClassString = (classesArray = [], defaults = [],) => {
    return [...defaults, ...classesArray].join(' ')
  }

  const groupClasses = makeClassString(addedGroupClasses, ['input-group'])
  const labelClasses = makeClassString(addedLabelClasses, ['input-label'])
  const inputClasses = makeClassString(addedInputClasses, ['form-input'])
  
  // Simulating formatted value
  const formattedValue = value.split('').map((x, i) => i % 2 === 0 ? x + ' ' : x).join('')
  

  
  return (
    <div className={groupClasses}>
      <label 
        htmlFor={name}
        className={labelClasses}
        >
        {label}
      </label>
      <input 
        id={inputId}
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        name={name}
        pattern={pattern}
        value={formattedValue}
        onChange={(e) => console.log(e.target.value)}
        >
        </input>
    </div>
  )
}

export default InputGroup
