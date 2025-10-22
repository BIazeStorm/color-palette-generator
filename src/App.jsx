import React, { useState } from 'react'
import Palette from './components/Palette'
import Controls from './components/Controls';
import { generateRandomColor, createColorObject } from './utils/colorUtils';
import './App.css'

const getInitialColors = () => {
  return Array.from({ length: 5 }, () => createColorObject());
};

function App() {

  const [colors, setColors] = useState(getInitialColors());

  const handleGeneratePalette = () => {
    const newColors = colors.map((color) => {
      return createColorObject();
    });
    setColors(newColors);
  };

  const handleToggleLock = (id) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, isLocked: !color.isLocked } : color
    );
    setColors(newColors);
  }

  return (
    <div className="App">
      <Controls onGenerate={handleGeneratePalette} />
      <Palette colors={colors} onToggleLock={handleToggleLock} />
    </div>
  );
}

export default App
