import React from "react";
import Card from 'react-bootstrap/Card';
import "./Card.css"
// import Input from './components/Input.js'
// import Button from './components/Button.js'

function Cards() {
    return (
        <div >
            <Card className="cardcolor">
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
        </div>
    )
}

export default Cards