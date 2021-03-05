import React from 'react'
import InputGroup from './InputGroup'

function Form({updateFormField, formState}) {
  return (
    <form>
       <InputGroup 
        label="First Name"
        name="First Name"
        type="text"
        addedGroupClasses={['firstName']}
        updateFormField={updateFormField}
        formState={formState}
       />
       <InputGroup 
        label="Last Name"
        name="Last Name"
        type="text"
        addedGroupClasses={['lastName']}
        updateFormField={updateFormField}
        formState={formState}
       />
       <InputGroup 
        label="Card Number"
        name="Card Number"
        type="text"
        addedGroupClasses={['creditCard']}
        updateFormField={updateFormField}
        formState={formState}
       />
       <InputGroup 
        label="Expiration Date"
        name="Expiration Date"
        type="text"
        addedGroupClasses={['expiration']}
        updateFormField={updateFormField}
        formState={formState}
       />
       <InputGroup 
        label="Security Code"
        name="Security Code"
        type="text"
        addedGroupClasses={['securityCode']}
        updateFormField={updateFormField}
        formState={formState}
       />
    </form>
  )
}

export default Form
