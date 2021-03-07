import { useState } from 'react';
import CardContainer from './components/CardContainer';
import Form from "./components/Form";

import './App.css';
import {checkIsExpired, checkNameField, checkSecurityCode, validateIsCardNumber} from './utilities/validation';

function App() {

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiration: '',
    securityCode: ''
  })

  const [errorState, setErrorState] = useState({
    firstName: true,
    lastName: false,
    cardNumber: false,
    expiration: false,
    securityCode: false
  })

  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const updateFormField = (field, value) => {
    return setFormState({...formState, [field]: value})
  }
  
  const getErrorField = (field) => errorState[field]
  
  const updateErrorField = (field, value) => {
  return setErrorState({...errorState, [field]: value})
  }
  const toggleErrorField = (field, value) => {
  return setErrorState({...errorState, [field]: !value})
  }

  const errorValidation = () => {

    let isError = false;

    const newErrorState = {}

    for (let field in errorState) {
      switch(field) {
        case 'firstName':
          if(checkNameField(formState[field])){
            newErrorState[field] = false
          } else {
            newErrorState[field] = true
            isError = true
          }
          break;
        case 'lastName':
          if(checkNameField(formState[field])){
            newErrorState[field] = false
          } else {
            newErrorState[field] = true
            isError = true
          }
          break;
        case 'cardNumber':
          if(validateIsCardNumber(formState[field])){
            newErrorState[field] = false
          } else {
            newErrorState[field] = true
            isError = true
          }
          break;
        case 'expiration':
          if(checkIsExpired(formState[field])){
            newErrorState[field] = true
            isError = true
          } else {
            newErrorState[field] = false
          }
          break;
        case 'securityCode':
          if(checkSecurityCode(formState[field])){
            newErrorState[field] = false
          } else {
            newErrorState[field] = true
            isError = true
          }
          break;
        default:
          break;
      } 
    }

    setErrorState(newErrorState)

    return isError
  }

  const mockSubmitHandle = async () => {

    if (isSuccess) {
      setIsSuccess(false)
      return setFormState({
        firstName: '',
        lastName: '',
        cardNumber: '',
        expiration: '',
        securityCode: ''
      })
    }

    // Set Loading State
    setIsSending(true)

    // Mock timing of a gateway call
    const isErrors = await new Promise((resolve) => {
      setTimeout(() => {
        const isErrors = errorValidation()
        resolve(isErrors)
      }, 2000)
    })

    // If Errors, revert back. 
    if (isErrors) {
      setIsSuccess(false)
    } else {
      setIsSuccess(true)
      /* This is where the request would be built to send to the API */
    }

    setIsSending(false)


  }
  

  // console.log(formState)

  return (
    <main className="page-grid">
      <div className="page-grid-spacer" ></div>
      <section className="page-grid-main" /* style={{background: "cornflowerblue"}} */>
        <div className="content-container">
          <CardContainer/>
          <Form
          updateFormField={updateFormField}
          getErrorField={getErrorField}
          updateErrorField={updateErrorField}
          toggleErrorField={toggleErrorField}
          formState={formState}
          mockSubmitHandle={mockSubmitHandle}
          isSending={isSending}
          isSuccess={isSuccess}
          />
        </div>
      </section>
      <div className="page-grid-spacer"></div>
    </main>
  );
}

export default App;
