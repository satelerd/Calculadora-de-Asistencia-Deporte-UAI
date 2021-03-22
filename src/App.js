import React from "react";
import './App.css';
import Input from './components/Input.js'
import Button from './components/Button.js'
import Cards from './components/Cards.js'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Calculadora de Asistencias Deportes UAI</h1>
      </header>
      <body>
        <div className="container">
          <Cards/>
          <h3>¿Cuantas asistencias llevas realizadas?</h3>
          <Input/>
          <h3>¿Cuantas asistencias llevas realizadas este mes?</h3>
          <Input/>
          <Button/>
        </div>
      </body>
    </div>
  );
}

export default App;
