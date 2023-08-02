from flask import jsonify, request
from models import User, Parent, Teacher, Student, Admin, SuperAdmin
from config import app, db
import datetime
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

jwt = JWTManager(app)


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

    # student = fields.Nested('StudentSchema', default=None)
    # parent = fields.Nested('ParentSchema', default=None)
    # teacher = fields.Nested('TeacherSchema', default=None)
    # admin = fields.Nested('AdminSchema', default=None)
    # superadmin = fields.Nested('SuperAdminSchema', default=None)


class TeacherSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Teacher
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')


class SuperAdminSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = SuperAdmin
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')


class AdminSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Admin
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')


class StudentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Student
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')


class ParentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Parent
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')


userSchema = UserSchema()
teacherSchema = TeacherSchema()
adminSchema = AdminSchema()
studentSchema = StudentSchema()
parentSchema = ParentSchema()


# LOGIN ALL USERS
@app.route('/login', methods=['POST'])
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

# CHECK CURRENT USER


@app.route('/session', methods=['POST'])
@jwt_required()
def session():
    token_data = get_jwt_identity()
    email = token_data['email']
    user = User.query.filter_by(email=email).first()
    return jsonify(user=userSchema.dump(user))


# SUPER ADMIN FUNCTIONALITY


# GET ALL USERS
@app.route('/superadmin_create', methods=['GET', 'POST'])
@jwt_required()
def handle_users():
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type != 'superadmin':
        return {"msg": "Unauthorized"}

    if request.method == 'GET':
        teachers = Teacher.query.all()
        admins = Admin.query.all()
        return jsonify(admins=adminSchema.dump(admins, many=True), teachers=teacherSchema.dump(teachers, many=True))

    if request.method == 'POST':
        data = request.get_json()

        user_name = data['user_name']
        email = data['email']
        password = data['password']
        user_type = data['user_type']

        user = User.query.filter_by(email=email).first()
        if user:
            user = user
        else:
            user = User(user_name=user_name, email=email,
                        password_hash=password, user_type=user_type)

        db.session.add(user)
        db.session.commit()

        obj = {'first_name': data['first_name'],
               'user_id': user.id,
               'last_name': data['last_name'],
               'DOB': data['DOB'],
               'address': data['address'],
               'phone_number': data['phone_number'],
               'employment_date': data['employment_date'],
               'appraisal': data['appraisal']}

        if user_type == 'Admin':
            admin = Admin(**obj)

            db.session.add(admin)
            db.session.commit()

            return jsonify(user=adminSchema.dump(admin))

        if user_type == 'Teacher':
            teacher = Teacher(**obj)

            db.session.add(teacher)
            db.session.commit()

            return jsonify(user=teacherSchema.dump(teacher))


if __name__ == "__main__":
    app.run(debug=True, port=5555)
