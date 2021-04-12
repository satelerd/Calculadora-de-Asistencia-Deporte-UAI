import React, { useState } from "react";
import './App.css';
import Button from './components/button/Button.js'
import CalculoDeportes from "./components/calculadora/Calculadora";
import Card from "./components/card/Card.js";
import Cards from "./components/cards/Cards.js"

function App() {
  
  const [inputVal_1, setInputVal_1] = useState(0);
  const [inputVal_2, setInputVal_2] = useState(0);

  const cardsInfo = [
    {
        id: 1,
        title: <h5>¿Cuantas asistencias de deportes llevas este semestre?</h5>,
        body: (
          <div>
              <input type="number" className="w-50" onChange={ event => setInputVal_1(event.target.value) } />
          </div>
      )
    },
    {
        id: 2,
        title: <h5>¿Cuantas asistencias de deportes llevas este mes?</h5>,
        body: (
          <div>
              <input type="number" className="w-50" onChange={ event => setInputVal_2(event.target.value) } />
          </div>
      )
    }];

    const [outputCalculadora, setOutputCalculadora] = useState();

    var resultado = () => {
      setOutputCalculadora(CalculoDeportes(inputVal_1, inputVal_2));
    }
    
    const cards = [
      {
          id: 1,
          title: <h4>Resultado</h4>,
          body: outputCalculadora
      },
      {
          id: 2,
          title: <h4>Requisitos para aprobar deporte</h4>,
          body: "Debes tener un mínimo de 26 asistencias en todo el semestre, contabilizando un máximo de 8 asistencias por mes y 1 al día."
      }
    ]

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
          <Cards info={cardsInfo} />
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
