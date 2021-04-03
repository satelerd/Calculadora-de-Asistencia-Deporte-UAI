import React,  { useState } from 'react'
import Card from '../card/Card.js'
import Input from '../input/Input.js'
import './Cards.css'

function Cards() {
    var [asistencias, setAsistencias] = useState(0)
    
    const cards = [
    {
        id: 1,
        title: <h5>¿Cuantas asistencias de deportes llevas este semestre?</h5>,
        body: <Input onChange={event => {
            setAsistencias(event.target.value)
            console.log(asistencias)
        }} /> // como saco el valor de number desde input hacia aca?
    },
    {
        id: 2,
        title: <h5>¿Cuantas asistencias de deportes llevas este mes?</h5>,
        body: <Input/>
    }
]
    return (
        <div className="container d-flex justify-content-center">
            <div className="col" key={cards[0].id}>
                <Card title={cards[0].title} body={cards[0].body} />
            </div>
            <div className="col" key={cards[1].id}>
                <Card title={cards[1].title} body={cards[1].body} />
            </div>
        </div>
    )
}

export default Cards;
