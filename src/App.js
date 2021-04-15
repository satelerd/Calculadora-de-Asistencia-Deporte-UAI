import React, { useState } from "react";
import './App.css';
import Button from './components/button/Button.js'
import CalculoDeportes from "./components/calculadora/Calculadora";
import Card from "./components/card/Card.js";
import Cards from "./components/cards/Cards.js"

// agruega 1 al contador de visitas
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.countapi.xyz/hit/satelerd.github.ioCalculadora-de-Asistencia-Deporte-UAI/visitas");
// xhr.responseType = "json";
// xhr.send();

function App() {
  
  const [inputVal_1, setInputVal_1] = useState();
  const [inputVal_2, setInputVal_2] = useState();

  const cardsInfo = [
    {
        id: 1,
        title: <h5>¿Cuantas asistencias de deportes llevas hasta la fecha?</h5>,
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
              <input type="number" className="w-50 mt-6" onChange={ event => setInputVal_2(event.target.value) } />
          </div>
      )
    }];

    const [outputCalculadora, setOutputCalculadora] = useState();

    var resultado = () => {
      setOutputCalculadora(CalculoDeportes(inputVal_1, inputVal_2));

      // Agruega 1 al contador del boton
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.countapi.xyz/hit/satelerd.github.ioCalculadora-de-Asistencia-Deporte-UAI/boton");
      xhr.responseType = "json";
      xhr.send();
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
          body: "Para aprobar deportes se necesitan cumplir con 26 asistencias, contabilizando solo 1 asistencia diaria y 8 asistencias por mes. El plazo para cumplir las asistencias es hasta el 13 de julio."
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
        <div>
          <h6>
            Si tienes dudas/ideas o encuentras un error me puedes enviar un dm <span>🙌🏼</span><br></br>
            <a href="https://www.instagram.com/sateler/">@sateler</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
