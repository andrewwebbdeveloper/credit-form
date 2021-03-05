import React from 'react'

function InputGroup({
  inputId,
  label,
  type,
  name,
  pattern,
  value = '',
  placeholder,
  autoComplete = 'off',
  addedGroupClasses,
  addedLabelClasses,
  addedInputClasses,
  onChange,
}) {

  const makeClassString = (classesArray = [], defaults = [],) => {
    return [...defaults, ...classesArray].join(' ')
  }

  const groupClasses = makeClassString(addedGroupClasses, ['input-group'])
  const labelClasses = makeClassString(addedLabelClasses, ['input-label'])
  const inputClasses = makeClassString(addedInputClasses, ['form-input'])
  
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
        autoComplete={autoComplete}
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        name={name}
        pattern={pattern}
        value={value}
        onChange={onChange}
        >
        </input>
    </div>
  )
}

export default InputGroup
