// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import TravelPlaces from './components/TravelPlaces';
import Translator from './components/Translator';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-4">
        <TravelPlaces />
        <Translator />
      </div>
    </div>
  );
}

export default App;
