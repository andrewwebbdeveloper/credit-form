import React from 'react'
import InputGroup from './InputGroup'

function CardInput({
  updateFormField,
  formState
}) {
  return (
    <InputGroup 
      label="Card Number"
      name="Card Number"
      type="text"
      addedGroupClasses={['creditCard']}
      updateFormField={updateFormField}
      onChange={(e) => updateFormField('cardNumber', e.target.value)}
      value={formState.cardNumber}
       />
  )
}

export default CardInput
