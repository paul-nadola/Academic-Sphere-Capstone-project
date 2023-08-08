from flask import jsonify, request, Blueprint
from models import User, Teacher, Admin, SuperAdmin
from flask_jwt_extended import get_jwt_identity, jwt_required
from schemas import adminSchema, superAdminSchema,teacherSchema
from config import db

superadmin_bp = Blueprint("superadmin", __name__)


# SUPER ADMIN FUNCTIONALITY


# GET ALL USERS
@superadmin_bp.route('/superadmin_create', methods=['GET', 'POST'])
@jwt_required()
def handle_users():
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type != 'superadmin':
        return {"msg": "Unauthorized"}

    if request.method == 'GET':
        current = SuperAdmin.query.filter_by(user_id=user.id).first()
        teachers = Teacher.query.all()
        admins = Admin.query.all()

        return jsonify(current=superAdminSchema.dump(current),
                       admins=adminSchema.dump(admins, many=True), teachers=teacherSchema.dump(teachers, many=True))

    if request.method == 'POST':
        data = request.get_json()

        user_name = data['user_name']
        email = data['email']
        password = data['password']
        user_type = data['user_type'].lower()

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
               'superadmin_bpraisal': data['superadmin_bpraisal']}

        if user_type == 'admin':
            admin = Admin(**obj)

            db.session.add(admin)
            db.session.commit()

            return jsonify(user=adminSchema.dump(admin))

        if user_type == 'teacher':
            teacher = Teacher(**obj)

            db.session.add(teacher)
            db.session.commit()

            return jsonify(user=teacherSchema.dump(teacher))

# GET ALL USERS


@superadmin_bp.route('/superadmin_edit/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@jwt_required()
def superadmin_edit(id):
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type != 'superadmin':
        return {"msg": "Unauthorized"}

    user = User.query.filter_by(id=id).first()
    user_type = user.user_type.lower()
    id = user.id

    if request.method == 'GET':
        if user_type == 'teacher':
            teacher = Teacher.query.filter_by(user_id=id).first()
            return jsonify(user=teacherSchema.dump(teacher)), 200

        if user_type == 'admin':
            admin = Admin.query.filter_by(user_id=id).first()
            return jsonify(user=adminSchema.dump(admin)), 200

    if request.method == 'PATCH':
        data = request.json.items()
        if user_type == 'teacher':
            tr = Teacher.query.filter_by(user_id=id).first()

            for key, value in data:
                setattr(tr, key, value)

            db.session.commit()
            return jsonify(user=teacherSchema.dump(tr)), 200

        if user_type == 'admin':
            admin = Admin.query.filter_by(user_id=id).first()

            for key, value in data:
                setattr(admin, key, value)

            db.session.commit()
            return jsonify(user=adminSchema.dump(admin)), 200

    if request.method == 'DELETE':

        if user_type == 'teacher':
            Teacher.query.filter_by(user_id=id).delete()
            db.session.commit()

        if user_type == 'admin':
            Admin.query.filter_by(user_id=id).delete()
            db.session.commit()

        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'User deleted successfully.'}), 200
