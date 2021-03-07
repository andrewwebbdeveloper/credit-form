import React from 'react'

import NameInput from './NameInput'
import CardInput from './CardInput'
import ExpirationInput from './ExpirationInput'
import SecurityCodeInput from './SecurityCodeInput'
import {generateInputErrorClass} from '../utilities/utilities'

function Form({
  updateFormField,
  getErrorField,
  updateErrorField,
  mockSubmitHandle,
  isSending,
  isSuccess,
  formState
}) {


  return (
    <form>
       <NameInput 
        label="First Name"
        name="First Name"
        type="text"
        addedGroupClasses={['firstName']}
        addedInputClasses={[generateInputErrorClass(getErrorField('firstName'))]}
        onChange={(e) => {
          updateFormField('firstName', e.target.value)
          updateErrorField('firstName', false)
          }}
        value={formState.firstName}
       />
       <NameInput 
        label="Last Name"
        name="Last Name"
        type="text"
        addedGroupClasses={['lastName']}
        addedInputClasses={[generateInputErrorClass(getErrorField('lastName'))]}
        onChange={(e) => {
          updateFormField('lastName', e.target.value)
          updateErrorField('lastName', false)
        }}
        value={formState.lastName}
       />
       <CardInput 
        updateFormField={updateFormField}
        formState={formState}
        getErrorField={getErrorField}
        updateErrorField={updateErrorField}
       />
       <ExpirationInput 
        updateFormField={updateFormField}
        formState={formState}
        getErrorField={getErrorField}
        updateErrorField={updateErrorField}
       />
       <SecurityCodeInput 
        updateFormField={updateFormField}
        formState={formState}
        getErrorField={getErrorField}
        updateErrorField={updateErrorField}
       />
      <button type="button" onClick={mockSubmitHandle}>{
        isSuccess
          ? 'Success!! ( Click to Reset )'
          : isSending
            ? 'Going...'
            : 'Go!'
        }</button>
    </form>
  )
}

export default Form
