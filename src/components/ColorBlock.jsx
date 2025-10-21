import React from "react";

function ColorBlock({ hex }){
    return (
        <div className="ColorBlock" style={{ backgroundColor: hex }}>
            <h2>{hex}</h2>
        </div>
    );
}

export default ColorBlock;