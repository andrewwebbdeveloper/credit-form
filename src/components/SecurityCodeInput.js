import React from 'react'
import InputGroup from './InputGroup'
import {removeSpaces, enforceCharLimit, enforceNoAlphaChars, removeNonSlashSymbols, removeSlashes, generateInputErrorClass} from '../utilities/utilities'

function SecurityCodeInput({
  updateFormField,
  getErrorField,
  updateErrorField,
  formState
}) {

  const cleanTargetValue = (value, previousValue) => {
    let newValue = value

    newValue = enforceCharLimit({value: newValue, previousValue, limit: 4})
    newValue = enforceNoAlphaChars({value: newValue, previousValue})
    newValue = removeSpaces(newValue)
    newValue = removeSlashes(newValue)
    newValue = removeNonSlashSymbols(newValue)

    return newValue
  }

  return (
    <InputGroup
      label="Security Code"
      name="Security Code"
      type="text"
      addedGroupClasses={['securityCode']}
      addedInputClasses={[generateInputErrorClass(getErrorField('securityCode'))]}
      updateFormField={updateFormField}
      onChange={(e) => {
        updateFormField('securityCode', cleanTargetValue(e.target.value, formState.securityCode))
        updateErrorField('securityCode', false)
    }}
      value={formState.securityCode}
    />
  )
}

export default SecurityCodeInput
