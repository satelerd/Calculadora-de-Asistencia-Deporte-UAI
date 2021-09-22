import React, { useState } from "react";
import './Input.css';

function Input({ onChange }, type, className) {
    const [number, setNumber] = useState(0);

    return (
        <div className="input">
            <input type="number" className={className} onChange={event => setNumber(event.target.value)} />
        </div>
    );

};

export default Input