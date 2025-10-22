import React, { useState } from 'react'
import Palette from './components/Palette'
import Controls from './components/Controls';
import './App.css'

function App() {

  const [colors, setColors] = useState([
    { id: 1, hex: '#e63946' },
    { id: 2, hex: '#f1faee' },
    { id: 3, hex: '#a8dadc' },
    { id: 4, hex: '#457b9d' },
    { id: 5, hex: '#1d3557' },
  ]);

  return (
    <div className="App">
      <Controls />
      <Palette colors={colors} />
    </div>
  );
}

export default App
