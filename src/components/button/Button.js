import React from "react";

function Button ({
    onClick
}) {
    return (
        <div>
            <button type="button" className="btn btn-outline-success" onClick={onClick}>
                Calcular
            </button>
        </div>
    )
}

export default Button