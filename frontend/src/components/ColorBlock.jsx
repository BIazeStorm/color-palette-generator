import React, { useState } from "react";
import chroma from "chroma-js";

function ColorBlock({ color, onToggleLock, onUpdateColor }) {
    const { id, hex, isLocked } = color;

    const [isCopied, setIsCopied] = useState(false);

    const [h, s, l] = chroma(hex).hsl();
    const hslValues = { h: isNaN(h) ? 0 : h, s, l };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(hex);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500)
    };

    const handleSliderChange = (sliderName, value) => {
        const newHsl = [
            sliderName === 'h' ? value : hslValues.h,
            sliderName === 's' ? value : hslValues.s,
            sliderName === 'l' ? value : hslValues.l,
        ];
        const newHex = chroma.hsl(...newHsl).hex();
        onUpdateColor(id, newHex);
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
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={hslValues.h}
                        onChange={(e) => handleSliderChange('h', parseFloat(e.target.value))}
                    />
                </label>
                <label>
                    <span>Saturation</span>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={hslValues.s}
                        onChange={(e) => handleSliderChange('s', parseFloat(e.target.value))}
                    />
                </label>
                <label>
                    <span>Lightness</span>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={hslValues.l}
                        onChange={(e) => handleSliderChange('l', parseFloat(e.target.value))}
                    />
                </label>
            </div>

            <h2 className="ColorBlock__hex" onClick={handleCopyToClipboard}>
                {isCopied ? 'Copied!' : hex}
            </h2>
        </div>
    );
}

export default ColorBlock;