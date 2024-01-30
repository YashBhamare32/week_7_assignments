import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      <h1>Background Changer</h1>
      <div className="color-picker">
        <button onClick={() => handleColorChange('#ff0000')}>Red</button>
        <button onClick={() => handleColorChange('#00ff00')}>Green</button>
        <button onClick={() => handleColorChange('#0000ff')}>Blue</button>
      </div>
    </div>
  );
};

export default App;
