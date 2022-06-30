import React from 'react';
import FormController from './Form/FormController';
import './App.css';

const App = () => {

  return (
    <div className="app">
      <p style={{ fontWeight: 'bold', fontSize: 25 }}> Message Sender </p>
      <FormController />
    </div>
  );
}

export default App;
