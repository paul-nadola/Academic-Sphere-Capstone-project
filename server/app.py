import os
from flask_cors import CORS
from flask import Flask, jsonify, session,request, make_response
from models import  db, User
from flask_migrate import Migrate


app = Flask(__name__)
app.secret_key = b'\xffu&\xcb0\xa1N\xb3\xf2\x08,B3\xec\x8eTd\x95[\xa3\xdd\xbd\x17C'
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://nadola:9U7juBqPTqLDZRKnwJl1TBXtE7CLCP37@dpg-cj35g1unqql8v0en9ni0-a.oregon-postgres.render.com/academic_sphere'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)
db.init_app(app)

CORS(app)



@app.route('/')
def index():
    # return f'welcome'
    return jsonify(detail = 'Welcome, this is a test route')

@app.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        user_list = []
        users = User.query.all()
        for user in users:
            user_list.append({
                "id": user.id,
                "user_name": user.user_name,
                "email": user.email,
                "password": user.password,
                "user_type": user.user_type,
                
            })
        response = make_response(
            jsonify(user_list),
                    200
        )
        response.headers['Content-Type'] = 'application/json'
        return response

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, port=5555)
