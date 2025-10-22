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

  return (
    <div className="App">
      <Controls onGenerate={handleGeneratePalette} />
      <Palette colors={colors} />
    </div>
  );
}

export default App
