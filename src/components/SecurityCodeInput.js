import React from 'react'
import InputGroup from './InputGroup'

function SecurityCodeInput({
  updateFormField,
  formState
}) {
  return (
    <InputGroup 
      label="Security Code"
      name="Security Code"
      type="text"
      addedGroupClasses={['securityCode']}
      updateFormField={updateFormField}
      onChange={(e) => updateFormField('securityCode', e.target.value)}
      value={formState.securityCode}
       />
  )
}

export default SecurityCodeInput
