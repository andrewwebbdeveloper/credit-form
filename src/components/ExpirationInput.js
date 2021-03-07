import React from 'react'
import InputGroup from './InputGroup'
import { removeSlashes, enforceCharLimit, enforceNoAlphaChars, enforceNumberLimit, removeNonSlashSymbols, expirationDisplayValue, generateInputErrorClass} from '../utilities/utilities'

function ExpirationInput({
  updateFormField,
  getErrorField,
  updateErrorField,
  formState
}) {

  const cleanTargetValue = (value, previousValue) => {
    let newValue = value

    newValue = removeSlashes(newValue)
    newValue = removeNonSlashSymbols(newValue)
    newValue = enforceNoAlphaChars({value: newValue, previousValue})
    newValue = enforceCharLimit({value:newValue, previousValue, limit: 4})

    // Automatically set 0 in front if first digit is higher that 1
    if (parseInt(newValue[0]) > 1) {
      newValue = `0${newValue[0]}`
    }
    
    // Check for month and year range
    const monthNumber = parseInt(newValue[0] + newValue[1])
    const yearNumber = parseInt(newValue[3] + newValue[4])
    
    if (newValue.length >= 2 ) {
      newValue = enforceNumberLimit({number: monthNumber, value: newValue, previousValue, low: 0, high: 12})
    }

    if (newValue.length >= 4) {
      newValue = enforceNumberLimit({number: yearNumber, value: newValue, previousValue, low: 0, high: 99})
    }

    return newValue
  }



  return (
    <InputGroup 
      label="Expiration Date"
      name="Expiration Date"
      type="text"
      addedGroupClasses={['expiration']}
      addedInputClasses={[generateInputErrorClass(getErrorField('expiration'))]}
      updateFormField={updateFormField}
      onChange={(e) => {
        updateFormField('expiration', cleanTargetValue(e.target.value, formState.expiration))
        updateErrorField('expiration', false)
      }}
      value={expirationDisplayValue(formState.expiration)}
       />
  )
}

export default ExpirationInput
