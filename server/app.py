import os
from flask_cors import CORS
from flask import Flask, jsonify, session,request, make_response
from models import  db
from flask_migrate import Migrate


app = Flask(__name__)
app.secret_key = b'\xffu&\xcb0\xa1N\xb3\xf2\x08,B3\xec\x8eTd\x95[\xa3\xdd\xbd\x17C'
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://nadola:9U7juBqPTqLDZRKnwJl1TBXtE7CLCP37@dpg-cj35g1unqql8v0en9ni0-a.oregon-postgres.render.com/academic_sphere'
migrate = Migrate(app, db)
db.init_app(app)

CORS(app)



@app.route('/')
def index():
    # return f'welcome'
    return jsonify(detail = 'Welcome, this is a test route')


if __name__ == "__main__":
    app.run(debug=True, port=5555)
