import React from 'react'
import Card from './Card'
import Input from './Input.js'

const cards = [
    {
        id: 1,
        title: "¿Cuantas asistencias llevas realizadas?",
        body: <Input/>
    },
    {
        id: 2,
        title: "¿Cuantas asistencias llevas realizadas este mes?",
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
