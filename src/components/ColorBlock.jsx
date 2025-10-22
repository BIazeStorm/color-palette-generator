import React from "react";

function ColorBlock({ color }){
    const { id, hex, isLocked } = color;

    return (
        <div className="ColorBlock" style={{ backgroundColor: hex }}>
            <button className={`ColorBlock__lock-btn ${isLocked ? 'is-locked' : ''}`}>
                {isLocked ? '🔒' : '🔓'}
            </button>
            <h2>{hex}</h2>
        </div>
    );
}

export default ColorBlock;