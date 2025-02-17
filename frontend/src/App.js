
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Canvas from './components/Canvas';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;