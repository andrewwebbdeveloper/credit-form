import React from 'react'
import InputGroup from './InputGroup'

function ExpirationInput({
  updateFormField,
  formState
}) {
  return (
    <InputGroup 
      label="Expiration Date"
      name="Expiration Date"
      type="text"
      addedGroupClasses={['expiration']}
      updateFormField={updateFormField}
      onChange={(e) => updateFormField('expiration', e.target.value)}
      value={formState.expiration}
       />
  )
}

export default ExpirationInput
