import React, { useState } from 'react'
import Card from '../card/Card.js'
import Input from '../input/Input.js'
import './Cards.css'

function Cards() {
        
    // Variables I want to export to App.js
    const [inputVal, setInputVal] = useState(0);

    // Card information (title and body)
    const cardInfo = {
        id: 1,
        title: <h5>¿How many sports assistances have you taken this semester?</h5>,
        body: (
            <div>
                <input type="number" className="w-50" onChange={ event => setInputVal(event.target.value) } />
            </div>
        )
    };

    // HTML return
    return (
        <div key={ cards.id }>
            <Card title={cards.title} body={cards[0].body} />
        </div>
    );
};

export default Cards;
