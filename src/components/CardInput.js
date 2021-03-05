import React from 'react'
import InputGroup from './InputGroup'
import { removeSpaces, enforceCharLimit, enforceNoAlphaChars, removeNonSlashSymbols, removeSlashes, cardDisplayValue} from '../utilities/utilities'

function CardInput({
  updateFormField,
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
      updateFormField={updateFormField}
      onChange={(e) => updateFormField('cardNumber', cleanTargetValue(e.target.value, formState.cardNumber))}
      value={cardDisplayValue(formState.cardNumber)}
       />
  )
}

export default CardInput
