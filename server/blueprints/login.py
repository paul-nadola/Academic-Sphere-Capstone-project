from flask import jsonify, request
from flask import Blueprint
from models import User
from flask_jwt_extended import create_access_token
from schemas import userSchema

login_bp = Blueprint("login", __name__)


@login_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    user = User.query.filter_by(email=email).first()

    if user:
        if user.authenticate(password):
            user_type_role_map = {
                "teacher": "teacher",
                "admin": "admin",
                "superadmin": "superadmin",
                "student": "student",
                "parent": "parent",
            }

            user_type = user.user_type
            if user_type in user_type_role_map:
                role = user_type_role_map[user_type]
                token = create_access_token(
                    identity={"email": user.email, "role": role})
                return jsonify(token=token, user=userSchema.dump(user))
            return {"msg": "Wrong user_type"}

        return {"msg": "Wrong password"}

    return {"msg": "User does not exist"}
