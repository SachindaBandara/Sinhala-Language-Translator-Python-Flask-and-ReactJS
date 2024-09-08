# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from googletrans import Translator

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS) to allow requests from React
translator = Translator()

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.json
    text = data.get('text')
    target_language = 'si'  # Sinhala language code

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    translation = translator.translate(text, dest=target_language)
    return jsonify({'translated_text': translation.text})

if __name__ == '__main__':
    app.run(debug=True)
