// src/components/Translator.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/translate', {
        text: text,
      });
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sinhala Language Translator</h1>
      <textarea
        className="w-96 p-2 border rounded-md mb-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button
        className="w-96 p-2 bg-blue-500 text-white rounded-md mb-4"
        onClick={handleTranslate}
      >
        Translate to Sinhala
      </button>
      <div className="w-96 p-4 bg-white border rounded-md">
        <h2 className="text-xl font-bold mb-2">Translated Text:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

export default Translator;
