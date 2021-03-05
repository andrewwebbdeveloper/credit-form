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
  addedInputClasses,
  updateFormField,
  formState
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
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        name={name}
        pattern={pattern}
        value={formState.firstName}
        onChange={(e) => updateFormField('firstName', e.target.value)}
        >
        </input>
    </div>
  )
}

export default InputGroup
