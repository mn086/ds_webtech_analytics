from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")

# Sample JSON data to serve
data = {
    "posts": [
        {
            "id": 1,
            "title": "HTML/Python Grundlagen",
            "content": "Ein Überblick über die wichtigsten HTML-Tags für Anfänger. Lernen Sie die Grundstruktur einer Webseite kennen und wie Sie Inhalte sinnvoll strukturieren.",
            "image": "https://picsum.photos/800/400?random=1",
            "date": "2024-03-15"
        },
        {
            "id": 2,
            "title": "CSS Styling Tipps",
            "content": "Wie du deine Webseite mit CSS zum Leben erwecken kannst. Entdecken Sie die Möglichkeiten von modernem CSS und wie Sie damit beeindruckende Designs erstellen.",
            "image": "https://picsum.photos/800/400?random=2",
            "date": "2024-03-16"
        },
        {
            "id": 3,
            "title": "JavaScript für Einsteiger",
            "content": "Einfache JavaScript-Konzepte für interaktive Webseiten. Verstehen Sie die Grundlagen der Programmierung und wie Sie Ihre Webseite interaktiv gestalten.",
            "image": "https://picsum.photos/800/400?random=3",
            "date": "2024-03-17"
        },
        {
            "id": 4,
            "title": "Responsive Design",
            "content": "Wie Sie Ihre Webseite für alle Geräte optimieren. Lernen Sie die Prinzipien des responsiven Designs und wie Sie es in Ihren Projekten umsetzen.",
            "image": "https://picsum.photos/800/400?random=4",
            "date": "2024-03-18"
        },
        {
            "id": 5,
            "title": "Responsive Design",
            "content": "Wie Sie Ihre Webseite für alle Geräte optimieren. Lernen Sie die Prinzipien des responsiven Designs und wie Sie es in Ihren Projekten umsetzen.",
            "image": "https://picsum.photos/800/400?random=5",
            "date": "2024-03-18"
        }
    ]
} 

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data)

@app.route('/', methods=['GET'])
def home():
    return """
    <html>
        <body>
            <h1>Python API in Docker</h1>
            <p>Access the JSON data at <a href="/api/data">/api/data</a></p>
        </body>
    </html>
    """

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9876, debug=False)