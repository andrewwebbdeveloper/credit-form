import React from 'react'
import InputGroup from './InputGroup'
import { removeSpaces, enforceCharLimit, enforceNoAlphaChars, removeNonSlashSymbols, removeSlashes, cardDisplayValue, generateInputErrorClass} from '../utilities/utilities'

function CardInput({
  updateFormField,
  getErrorField,
  updateErrorField,
  formState
}) {

  const cleanTargetValue = (value, previousValue) => {
    let newValue = value

    newValue = enforceCharLimit({value:newValue, previousValue, limit: 19})
    newValue = enforceNoAlphaChars({value:newValue, previousValue})
    newValue = removeSpaces(newValue)
    newValue = removeSlashes(newValue)
    newValue = removeNonSlashSymbols(newValue)

    return newValue
  }

  return (
    <InputGroup 
      label="Card Number"
      name="Card Number"
      type="text"
      addedGroupClasses={['creditCard']}
      addedInputClasses={[generateInputErrorClass(getErrorField('cardNumber'))]}
      updateFormField={updateFormField}
      onChange={(e) => {
        updateFormField('cardNumber', cleanTargetValue(e.target.value, formState.cardNumber))
        updateErrorField('cardNumber', false)
      }}
      value={cardDisplayValue(formState.cardNumber)}
       />
  )
}

export default CardInput
