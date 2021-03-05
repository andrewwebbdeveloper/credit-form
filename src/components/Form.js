import React from 'react'

import NameInput from './NameInput'
import CardInput from './CardInput'
import ExpirationInput from './ExpirationInput'
import SecurityCodeInput from './SecurityCodeInput'

function Form({updateFormField, formState}) {
  return (
    <form>
       <NameInput 
        label="First Name"
        name="First Name"
        type="text"
        addedGroupClasses={['firstName']}
        onChange={(e) => updateFormField('firstName', e.target.value)}
        value={formState.firstName}
       />
       <NameInput 
        label="Last Name"
        name="Last Name"
        type="text"
        addedGroupClasses={['lastName']}
        onChange={(e) => updateFormField('lastName', e.target.value)}
        value={formState.lastName}
       />
       <CardInput 
        updateFormField={updateFormField}
        formState={formState}
       />
       <ExpirationInput 
        updateFormField={updateFormField}
        formState={formState}
       />
       <SecurityCodeInput 
        updateFormField={updateFormField}
        formState={formState}
       />
    </form>
  )
}

export default Form
