import React from 'react'
import InputGroup from './InputGroup'
import { removeSpaces, enforceCharLimit, enforceNoAlphaChars} from '../utilities/utilities'

function CardInput({
  updateFormField,
  formState
}) {

  //TODO: Need function two functions. One to format incoming, and one for outgoing ( update state ).

  const cardDisplayValue = (value) => {

    let formattedString = ''
    const spaceIndexes = [4, 8, 12]
    
    for (let i = 0; i < value.length; i++) {
      if (spaceIndexes.includes(i)) {
        formattedString += ' '
      }

      formattedString += value[i]
    }

    return formattedString
  }

  // const removeSpaces = (value) => value.replaceAll(' ', '')

  // const enforceCharLimit = ({limit, value, previousValue}) => value.length <= limit ? value : previousValue

  // const enforceNumericChars = ({value, previousValue}) => {
  //   const hasLetters = /[a-zA-Z]/g.test(value);

  //   return hasLetters ? previousValue : value
  // }

  const cleanTargetValue = (value) => {
    const previousValue = formState.cardNumber
    let newValue = value

    newValue = enforceCharLimit({value:newValue, previousValue, limit: 19})
    newValue = enforceNoAlphaChars({value:newValue, previousValue})
    newValue = removeSpaces(newValue)

    return newValue
  }



  return (
    <InputGroup 
      label="Card Number"
      name="Card Number"
      type="text"
      addedGroupClasses={['creditCard']}
      updateFormField={updateFormField}
      onChange={(e) => updateFormField('cardNumber', cleanTargetValue(e.target.value))}
      value={cardDisplayValue(formState.cardNumber)}
       />
  )
}

export default CardInput
