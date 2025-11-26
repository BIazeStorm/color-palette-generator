import React, { useState, useEffect } from 'react' 
import axios from 'axios';
import Palette from './components/Palette'
import Controls from './components/Controls';
import SavedPalettes from './components/SavedPalettes';
import { 
  createColorObject, 
  generateRandomPalette,
} from './utils/colorUtils';
import './App.css'

const API_URL = import.meta.env.VITE_API_URL;

const getInitialColors = () => {
  return Array.from({ length: 5 }, () => createColorObject());
};

function App() {

  const [colors, setColors] = useState(getInitialColors());

  const [savedPalettes, setSavedPalettes] = useState([]);

  useEffect(() => {
    if (!API_URL) return;

    axios.get(`${API_URL}/api/palettes`)
      .then((response) => {
        const formattedPalettes = response.data.map(palette => palette.colors);
        setSavedPalettes(formattedPalettes);
      })
      .catch((error) => console.error("Error fetching palettes:", error));
  }, []);

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

  const handleSavePalette = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/palettes`, { colors });
      
      setSavedPalettes([response.data.colors, ...savedPalettes]);
    } catch (error) {
      console.error("Error saving palette:", error);
      alert("Failed to save palette. Check console.");
    }
  };
  
  const handleLoadPalette = (palette) => {
    setColors(palette);
  };

  return (
    <div className="App">
      <Controls 
        onGenerate={handleGeneratePalette} 
        onSavePalette={handleSavePalette}
      />
      
      <Palette 
        colors={colors} 
        onToggleLock={handleToggleLock}
        onUpdateColor={handleUpdateColor}
      />

      <SavedPalettes 
        savedPalettes={savedPalettes} 
        onLoadPalette={handleLoadPalette}
      />
    </div>
  );
}

export default App