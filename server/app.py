from flask import jsonify, request
from models import User, Parent, Teacher, Student, Admin, SuperAdmin
from config import app
import datetime
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

jwt = JWTManager(app)


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        # exclude = ('password',)


class TeacherSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Teacher
        load_instance = True


userSchema = UserSchema()
teacherSchema = TeacherSchema()


# LOGIN ALL USERS
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    user = User.query.filter_by(email=email).first()
    if user:
        if user.authenticate(password):
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
        return {"msg":"Wrong password"}

    return {"msg": "User does not exist"}

# CHECK CURRENT USER


@app.route('/session', methods=['POST'])
@jwt_required()
def session():
    token_data = get_jwt_identity()
    email = token_data['email']
    user = User.query.filter_by(email=email).first()
    return jsonify(user=userSchema.dump(user))


# SUPER USER FUNCTIONALITY


# GET ALL USERS
@app.route('/superadmin', methods=['GET', 'POST'])
@jwt_required()
def handle_users():
    token_data = get_jwt_identity()
    email = token_data['email']
    user = User.query.filter_by(email=email).first()
    if user.user_type != 'superadmin':
        return {"msg": "Unauthorized"}

    if request.method == 'GET':
        teachers = Teacher.query.all()
        return teacherSchema.dump(teachers, many=True)

    if request.method == 'POST':
        data = request.get_json()


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
