import React from 'react'
import Input from './Input.js'
import './Card.css'

function Card({title, body}) {
    return (
        <div className="card border-dark">
            <div className="card-body text-center">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">
                    {body}
                </p>
            </div>
        </div>
    )
}

export default Card
