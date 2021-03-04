import React from 'react'
import InputGroup from './InputGroup'

function Form() {
  return (
    <form>
       {/* Inputs Will go here */}
       <InputGroup 
        label="First Name"
        name="First Name"
        type="text"
       />
       <InputGroup 
        label="Last Name"
        name="Last Name"
        type="text"
       />
       <InputGroup 
        label="Card Number"
        name="Card Number"
        type="text"
       />
       <InputGroup 
        label="Expiration Date"
        name="Expiration Date"
        type="text"
       />
       <InputGroup 
        label="Security Code"
        name="Security Code"
        type="text"
       />
    </form>
  )
}

export default Form
