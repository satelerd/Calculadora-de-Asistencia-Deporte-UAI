import React from 'react'
import './Card.css'

function Card({title, body, space}) {
    return (
        <div className="card border-dark">
            <div className="card-body text-center">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">
                    {body}
                    {space}
                </p>
            </div>
        </div>
    )
}

export default Card
