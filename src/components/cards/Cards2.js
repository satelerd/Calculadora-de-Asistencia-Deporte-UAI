import React, { useState } from 'react'
import Card from '../card/Card.js'
import Input from '../input/Input.js'
import './Cards.css'

function Cards() {
    
    // Variables I want to export to App.js
    const [inputVal_1, setInputVal_1] = useState(0);
    const [inputVal_2, setInputVal_2] = useState(0);

    // Card information (title and body)
    const cards = {
        id: 1,
        title: <h5>¿How many sports assistances have you taken this semester?</h5>,
        body: (
            <div>
                <input type="number" className="w-50" onChange={ event => setInputVal_1(event.target.value) } />
            </div>
        )
    };

    // HTML return
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
