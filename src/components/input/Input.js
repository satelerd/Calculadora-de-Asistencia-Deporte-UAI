import React,  { useState } from "react";
import './Input.css'



function Input({onChange}) {
    var [number, setNumber] = useState(0)
    return (
        <div>
            <input type="number" className="w-50" onChange={event => {
                setNumber(event.target.value)
                console.log(number)
                }}/>
        </div>
    )
}

export default Input