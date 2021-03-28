import React from 'react'
import Card from '../card/Card.js'
import Input from '../input/Input.js'
import './Cards.css'

const cards = [
    {
        id: 1,
        title: <h5>¿Cuantas asistencias de deportes llevas este semestre?</h5>,
        body: <Input/>
    },
    {
        id: 2,
        title: <h5>¿Cuantas asistencias de deportes llevas este mes?</h5>,
        body: <Input/>
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center">
            {
                cards.map(card => (
                    <div className="col" key={card.id}>
                        <Card title={card.title} body={card.body}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards
