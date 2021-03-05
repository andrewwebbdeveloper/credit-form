import { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import Form from "./components/Form";

import './App.css';

function App() {

  const [formState, setFormState] = useState({
    firstName: 'Hello',
    lastName: '',
    cardNumber: '',
    expiration: '',
    securityCode: ''
  })

  const updateFormField = (field, value) => {
    return setFormState({...formState, [field]: value})
  }

  // console.log(formState)

  return (
    <main className="page-grid">
      <div className="page-grid-spacer" ></div>
      <section className="page-grid-main" style={{background: "cornflowerblue"}}>
        <div className="content-container">
          <CardContainer/>
          <Form
          updateFormField={updateFormField}
          formState={formState}
          />
        </div>
      </section>
      <div className="page-grid-spacer"></div>
    </main>
  );
}

export default App;
