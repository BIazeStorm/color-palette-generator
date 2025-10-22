import React, { useState } from 'react'
import Palette from './components/Palette'
import Controls from './components/Controls';
import { generateRandomColor } from './utils/colorUtils';
import './App.css'

const getInitialColors = () => {
  return Array.from({ length: 5 }, () => ({
    id: crypto.randomUUID(),
    hex: generateRandomColor(),
  }));
};

function App() {

  const [colors, setColors] = useState(getInitialColors());

  const handleGeneratePalette = () => {
    const newColors = colors.map((color) => {
      return {
        ...color,
        hex: generateRandomColor(),
      };
    });
    setColors(newColors);
  };

  return (
    <div className="App">
      <Controls onGenerate={handleGeneratePalette} />
      <Palette colors={colors} />
    </div>
  );
}

export default App
