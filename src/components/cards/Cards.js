import React     from 'react'
import Card from '../card/Card.js'
import './Cards.css'

function Cards({ info }) {
    return (
        <div className="container d-flex justify-content-center">
            <div className="col" key={info[0].id}>
                <Card title={info[0].title} body={info[0].body} />
            </div>
            <div className="col" key={info[1].id}>
                <Card title={info[1].title} body={info[1].body} />
            </div>
        </div>
    );
};

export default Cards;
