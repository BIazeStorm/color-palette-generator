import React, { useState } from 'react';

function SavedPalettes({ savedPalettes, onLoadPalette }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
    if (!savedPalettes.length) return null;

    const handleCopyCSS = (e, palette, index) => {
    e.stopPropagation();

    const cssString = `:root {\n${palette
      .map((c, i) => `  --color-${i + 1}: ${c.hex};`)
      .join('\n')}\n}`;

    navigator.clipboard.writeText(cssString);

    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="SavedPalettes">
      <h3>Saved Palettes</h3>
      <div className="SavedPalettes__list">
        {savedPalettes.map((palette, index) => (
          <div
            key={index}
            className="SavedPalettes__item"
            onClick={() => onLoadPalette(palette)}
          >

            {palette.map((color) => (
              <div
                key={color.id}
                className="SavedPalettes__item-color"
                style={{ backgroundColor: color.hex }}
              ></div>
            ))}

            <button 
              className="SavedPalettes__copy-btn"
              onClick={(e) => handleCopyCSS(e, palette, index)}
            >
              {copiedIndex === index ? 'Copied!' : 'CSS'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedPalettes;