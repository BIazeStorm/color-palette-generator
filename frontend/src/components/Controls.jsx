import React from 'react';

function Controls({ onGenerate, onSavePalette }) {
  return (
    <div className="Controls">
      <button className="Controls__btn" onClick={onGenerate}>
        Generate Random
      </button>
      
      <button className="Controls__btn" onClick={onSavePalette}>
        Save Palette
      </button>
    </div>
  );
}

export default Controls;