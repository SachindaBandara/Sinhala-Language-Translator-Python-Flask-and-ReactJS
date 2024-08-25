# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from googletrans import Translator

app = Flask(__name__)
CORS(app)  # To handle CORS issues between React and Flask
translator = Translator()

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
