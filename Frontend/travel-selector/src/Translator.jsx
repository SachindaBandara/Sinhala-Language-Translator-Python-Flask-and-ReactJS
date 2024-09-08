// src/components/Translator.js
import React, { useState } from 'react';
import axios from 'axios';

function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('es');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/translate', {
        text: text,
        dest_lang: language,
      });
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Translate Text</h2>
      <textarea
        className="border p-2 w-full mb-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <select
        className="border p-2 mb-4 w-full"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ja">Japanese</option>
        <option value="zh-cn">Chinese (Simplified)</option>
      </select>
      <button
        className="bg-blue-500 text-white p-2 w-full"
        onClick={handleTranslate}
      >
        Translate
      </button>
      {translatedText && (
        <div className="mt-4 p-4 border bg-gray-100">
          <h3 className="font-bold">Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default Translator;
