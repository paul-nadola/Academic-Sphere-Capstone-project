from flask import jsonify, request
from models import User, Parents, Teachers, Students, Admin, SuperAdmin
from config import app
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

jwt = JWTManager(app)


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True


userSchema = UserSchema()


@app.route('/')
def index():
    return jsonify(detail='Welcome, this is a test route')


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    user = User.query.filter_by(email=email).first()
    if user:
        if user.user_type == "teacher":
            token = create_access_token(
                identity={"email": user.email, "role": user.user_type})
            return jsonify(token=token, user=userSchema.dump(user))

        if user.user_type == "admin":
            token = create_access_token(
                identity={"email": user.email, "role": user.user_type})
            return jsonify(token=token, user=userSchema.dump(user))

        if user.user_type == "superadmin":
            token = create_access_token(
                identity={"email": user.email, "role": user.user_type})
            return jsonify(token=token, user=userSchema.dump(user))

        if user.user_type == "student":
            token = create_access_token(
                identity={"email": user.email, "role": user.user_type})
            return jsonify(token=token, user=userSchema.dump(user))

        if user.user_type == "parent":
            token = create_access_token(
                identity={"email": user.email, "role": user.user_type})
            return jsonify(token=token, user=userSchema.dump(user))

    return {"Error": "User does not exist"}


@app.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        users = User.query.all()
        return userSchema.dump(users, many=True)


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    role = data['role']

    email = data['email']
    password = data['password']
    user_type = data['user_type']
    user = User
    if user:
        if user.authenticate(password):
            result = userSchema.dump(user)
            access_token = create_access_token(
                identity={"username": username, "id": user.id})
            return jsonify(access_token=access_token, user=result)
        return {"msg": "Wrong password"}
    return {"msg": "User does not exist"}


if __name__ == "__main__":
    app.run(debug=True, port=5555)
