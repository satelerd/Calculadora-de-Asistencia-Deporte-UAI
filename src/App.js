import React from "react";
import './App.css';
import Button from './components/button/Button.js'
import CalculoDeportes from "./components/calculadora/Calculadora";
import Card from "./components/card/Card.js";
import Cards from "./components/cards/Cards.js"
import Input from "./components/input/Input"


var resultado = () => {
  var textoResultado = CalculoDeportes(<Input type="value" />, 8);
  console.log(textoResultado)
  return textoResultado
}

const cards = [
  {
      id: 1,
      title: <h4>Resultado</h4>,
      body: resultado()
  },
  {
      id: 2,
      title: <h4>Requisitos para aprobar deporte</h4>,
      body: "Debes tener un mínimo de 26 asistencias en todo el semestre, contabilizando un máximo de 8 asistencias por mes y 1 al día."
  }
]

function App() {

  return (
    <div className="App">
      <header>
        <h1>Calculadora de Asistencias Deportes UAI</h1>
      </header>

      <div>
        <div className="requisitos-card container">
          <Card title={cards[1].title} body={cards[1].body} />
        </div>
        <div className="input-cards">
          <Cards/>
        </div>
        <div className="boton d-flex justify-content-center">
          <Button onClick={() => {resultado()}}>Calcular</Button>
        </div>
        <div className="resultados-card container">
          <Card title={cards[0].title} body={cards[0].body} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
