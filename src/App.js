import React from "react";
import './App.css';
import Button from './components/button/Button.js'
import Card from "./components/card/Card.js";
import Cards from './components/cards/Cards.js'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Calculadora de Asistencias Deportes UAI</h1>
      </header>
      <body>
        <div>
          <div className="input-cards">
            <Cards/>
          </div>
          <div className="boton d-flex justify-content-center">
            <Button className="col"/>
          </div>
          <div className="result-card container">
            <Card/>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
