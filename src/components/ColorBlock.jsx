import React, { useState } from "react";
import chroma from "chroma-js";

function ColorBlock({ color, onToggleLock }) {
    const { id, hex, isLocked } = color;

    const [isCopied, setIsCopied] = useState(false);

    const [h, s, l] = chroma(hex).hsl();
    const hslValues = { h: isNaN(h) ? 0 : h, s, l };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(hex);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500)
    };

    return (
        <div className="ColorBlock" style={{ backgroundColor: hex }}>
            <button
                className={`ColorBlock__lock-btn ${isLocked ? 'is-locked' : ''}`}
                onClick={() => onToggleLock(id)}
            >
                {isLocked ? '🔒' : '🔓'}
            </button>

            <div className="ColorBlock__sliders">
                <label>
                    <span>Hue</span>
                    <input type="range" min="0" max="360" value={hslValues.h} />
                </label>
                <label>
                    <span>Saturation</span>
                    <input type="range" min="0" max="1" step="0.01" value={hslValues.s} />
                </label>
                <label>
                    <span>Lightness</span>
                    <input type="range" min="0" max="1" step="0.01" value={hslValues.l} />
                </label>
            </div>

            <h2 className="ColorBlock__hex" onClick={handleCopyToClipboard}>
                {isCopied ? 'Copied!' : hex}
            </h2>
        </div>
    );
}

export default ColorBlock;