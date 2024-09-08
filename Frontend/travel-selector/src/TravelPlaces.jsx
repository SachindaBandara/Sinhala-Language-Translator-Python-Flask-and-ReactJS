// src/components/TravelPlaces.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TravelPlaces() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/places')
      .then(response => {
        setPlaces(response.data);
      })
      .catch(error => {
        console.error('Error fetching travel places:', error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Select a Travel Destination</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {places.map(place => (
          <div key={place.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelPlaces;
