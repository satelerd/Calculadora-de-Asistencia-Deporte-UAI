import React, { useState } from "react";
import './Input.css';

function Input ({onChange}, type) {
    const [number, setNumber] = useState(0);

    // if (type === "input") {
        console.log(number)
        return (
            <div>
                <input type="number" className="w-50" onChange={ event => setNumber(event.target.value) } />
            </div>
        );
    // } else if (type === "value") {
    //     return number
    // }
};

export default Input