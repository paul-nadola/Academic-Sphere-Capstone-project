from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS


app = Flask(__name__)
app.secret_key = b'\xffu&\xcb0\xa1N\xb3\xf2\x08,B3\xec\x8eTd\x95[\xa3\xdd\xbd\x17C'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:volatyl123@localhost:5432/new'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False


db = SQLAlchemy()
migrate = Migrate(app, db)
db.init_app(app)

CORS(app)

bcrypt = Bcrypt(app)
