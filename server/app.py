import os
from flask_cors import CORS
from flask import Flask, jsonify, session,request, make_response
from config import app, db

CORS(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')



@app.route('/')
def index():
    # return f'welcome'
    return jsonify(detail = 'Welcome, this is a test route')


if __name__ == "__main__":
    app.run(debug=True, port=5555)
