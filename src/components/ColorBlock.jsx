import React, { useState } from "react";

function ColorBlock({ color, onToggleLock }){
    const { id, hex, isLocked } = color;

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(hex);
        setIsCopied(true);
    };

    return (
        <div className="ColorBlock" style={{ backgroundColor: hex }}>
            <button 
                className={`ColorBlock__lock-btn ${isLocked ? 'is-locked' : ''}`}
                onClick={() => onToggleLock(id)}
            >
                {isLocked ? '🔒' : '🔓'}
            </button>
            <h2 className="ColorBlock__hex" onClick={handleCopyToClipboard}>
                {hex}
            </h2>
        </div>
    );
}

export default ColorBlock;