import React from "react";
import './App.css';
import Button from './components/button/Button.js'
import Card from "./components/card/Card.js";
import Cards from './components/cards/Cards.js'

const cards = [
  {
      id: 1,
      title: "Resultado",
      body: "Te quedan X días para hacer X asistencias ... ... ..."
  },
  {
      id: 2,
      title: "Requisitos para aprobar deporte",
      body: "Para aprobar deportes, debes tener un mínimo de 26 asistencias en todo el semestre, contabilizando un máximo de 8 asistencias por mes y 1 al día."
  }
]

function App() {
  return (
    <div className="App">
      <header>
        <h1>Calculadora de Asistencias Deportes UAI</h1>
      </header>
      <body>
        <div>
          <div className="requisitos-card container">
            <Card title={cards[1].title} body={cards[1].body} />
          </div>
          <div className="input-cards">
            <Cards/>
          </div>
          <div className="boton d-flex justify-content-center">
            <Button className="col"/>
          </div>
          <div className="resultados-card container">
            <Card title={cards[0].title} body={cards[0].body} />
          </div>
          
        </div>
      </body>
    </div>
  );
}

export default App;
