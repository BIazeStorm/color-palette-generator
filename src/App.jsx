import React, { useState } from 'react'
import Palette from './components/Palette'
import Controls from './components/Controls';
import { 
  createColorObject, 
  generateRandomPalette,
} from './utils/colorUtils';
import './App.css'

const getInitialColors = () => {
  return Array.from({ length: 5 }, () => createColorObject());
};

function App() {

  const [colors, setColors] = useState(getInitialColors());

  const handleGeneratePalette = () => {
    const newColors = generateRandomPalette(colors);
    setColors(newColors);
  };

  const handleToggleLock = (id) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, isLocked: !color.isLocked } : color
    );
    setColors(newColors);
  }

  const handleUpdateColor = (id, newHex) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, hex: newHex } : color
    );
    setColors(newColors);
  };

  return (
    <div className="App">
      <Controls onGenerate={handleGeneratePalette} />
      <Palette 
        colors={colors} 
        onToggleLock={handleToggleLock}
        onUpdateColor={handleUpdateColor}
      />
    </div>
  );
}

export default App
