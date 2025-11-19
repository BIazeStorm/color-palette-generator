import React from 'react';

function SavedPalettes({ savedPalettes, onLoadPalette }) {
  if (!savedPalettes.length) return null;

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
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedPalettes;