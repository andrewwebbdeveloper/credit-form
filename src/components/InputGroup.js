import React, {useState, useEffect} from 'react'

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

  const [isPlaceholderLabel, setIsPlaceholderLabel] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  

  useEffect(() => {
    if(value.length > 0 || isFocused) {
      setIsPlaceholderLabel(false)
    } else {
      setIsPlaceholderLabel(true)
    }

  }, [value, isFocused])

  const makeClassString = (classesArray = [], defaults = []) => {
    return [...defaults, ...classesArray].join(' ')
  }

  const toggleFocus = () => {
    setIsFocused(!isFocused)
  }
  
  
  const handlePlaceholderLabel = () => {
    return isPlaceholderLabel ? 'input-label--placeholder' : ''
  }
  

  const groupClasses = makeClassString(addedGroupClasses, ['input-group'])
  const labelClasses = makeClassString(addedLabelClasses, ['input-label', handlePlaceholderLabel()])
  const inputClasses = makeClassString(addedInputClasses, ['form-input'])

  // console.log(inputClasses)
  
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
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onChange={onChange}
        >
        </input>
    </div>
  )
}

export default InputGroup
