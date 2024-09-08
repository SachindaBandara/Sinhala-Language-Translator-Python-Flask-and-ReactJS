// src/App.js
import React from 'react';
import Navbar from './Navbar';
import TravelPlaces from './TravelPlaces';
import Translator from './Translator';

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
