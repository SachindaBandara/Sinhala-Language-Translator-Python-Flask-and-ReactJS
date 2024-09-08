# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
from googletrans import Translator

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Sample travel places data
places = [
    {"id": 1, "name": "Paris", "description": "The city of lights."},
    {"id": 2, "name": "Tokyo", "description": "A bustling metropolis."},
    {"id": 3, "name": "New York", "description": "The city that never sleeps."},
    {"id": 4, "name": "Sydney", "description": "Home of the Sydney Opera House."},
]

# Translator setup
translator = Translator()

# Get the list of travel places
@app.route('/places', methods=['GET'])
def get_places():
    return jsonify(places)

# Translate the text to the chosen language
@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.json
    text = data.get('text')
    dest_lang = data.get('dest_lang')
    if not text or not dest_lang:
        return jsonify({'error': 'Invalid input'}), 400

    translation = translator.translate(text, dest=dest_lang)
    return jsonify({'translated_text': translation.text})

if __name__ == '__main__':
    app.run(debug=True)

