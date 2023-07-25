from flask_cors import CORS

from config import app, db

CORS(app)


@app.route('/')
def index():
    return f'welcome'


if __name__ == "__main__":
    app.run(debug=True, port=5555)
