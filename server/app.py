from flask import jsonify, request
from models import User, Parent, Teacher, Student, Admin, SuperAdmin, Department, Course, Unit, Assessment, Grade, Payment, TeacherAttendance, StudentAttendance, LeaveOfAbsence
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
    user_id = fields.String(attribute='users.id')


class SuperAdminSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = SuperAdmin
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')
    user_id = fields.String(attribute='users.id')


class AdminSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Admin
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')
    user_id = fields.String(attribute='users.id')


class StudentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Student
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')
    user_id = fields.String(attribute='users.id')


class ParentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Parent
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')
    user_id = fields.String(attribute='users.id')


class DepartmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Department
        load_instance = True


class CourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Course
        load_instance = True


class UnitSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Unit
        load_instance = True


class AssessmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Assessment
        load_instance = True


class GradeSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Grade
        load_instance = True


class PaymentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Payment
        load_instance = True


class TeacherAttendanceSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = TeacherAttendance
        load_instance = True


class StudentAttendanceSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = StudentAttendance
        load_instance = True


class LeaveOfAbsenceSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = LeaveOfAbsence
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')
    user_id = fields.String(attribute='users.id')


class StudentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Student
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')
    user_id = fields.String(attribute='users.id')


class ParentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Parent
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')
    user_id = fields.String(attribute='users.id')


userSchema = UserSchema()
teacherSchema = TeacherSchema()
adminSchema = AdminSchema()
studentSchema = StudentSchema()
parentSchema = ParentSchema()
departmentSchema = DepartmentSchema()
courseSchema = CourseSchema()
unitSchema = UnitSchema()
assessmentSchema = AssessmentSchema()
gradeSchema = GradeSchema()
paymentSchema = PaymentSchema()
teacherAttendanceSchema = TeacherAttendanceSchema()
studentAttendanceSchema = StudentAttendanceSchema()
leaveOfAbsenceSchema = LeaveOfAbsenceSchema()
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
               'appraisal': data['appraisal']}

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


@app.route('/superadmin_edit/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
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


# ADMIN FUNCTIONALITY

@app.route('/admin_create', methods=['GET', 'POST'])
@jwt_required()
def admin_create():
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type.lower() != 'admin':
        return {"msg": "Unauthorized"}

    if request.method == 'GET':
        teachers = Teacher.query.all()
        students = Student.query.all()
        parents = Parent.query.all()
        departments = Department.query.all()
        tr_attendance = TeacherAttendance.query.all()
        leave = LeaveOfAbsence.query.all()
        if user_type == 'teacher':
            teacher = Teacher(**obj)

            db.session.add(teacher)
            db.session.commit()

            return jsonify(user=teacherSchema.dump(teacher))

# GET ALL USERS


@app.route('/superadmin_edit/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
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

        return jsonify(teachers=teacherSchema.dump(teachers, many=True),
                       students=studentSchema.dump(students, many=True),
                       parents=parentSchema.dump(parents, many=True),
                       departments=departmentSchema.dump(
                           departments, many=True),
                       tr_attendance=teacherAttendanceSchema.dump(
                           tr_attendance, many=True),
                       leave=leaveOfAbsenceSchema.dump(leave, many=True)
                       )
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

        if user_type == 'teacher':
            obj = {'first_name': data['first_name'],
                   'user_id': user.id,
                   'last_name': data['last_name'],
                   'DOB': data['DOB'],
                   'address': data['address'],
                   'phone_number': data['phone_number'],
                   'employment_date': data['employment_date'],
                   'appraisal': data['appraisal']}

            teacher = Teacher(**obj)

            db.session.add(teacher)
            db.session.commit()

            return jsonify(user=teacherSchema.dump(teacher))

        if user_type == 'student':
            obj = {'user_id': user.id,
                   'first_name': data['first_name'],
                   'last_name': data['last_name'],
                   'DOB': data['DOB'],
                   'address': data['address'],
                   'phone_number': data['phone_number'],
                   'enrollment_date': data['enrollment_date'],
                   'department_id': data['department_id'],
                   'course_id': data['course_id'],
                   'teacher_id': data['teacher_id']
                   }

            std = Student(**obj)

            db.session.add(std)
            db.session.commit()

            return jsonify(std=studentSchema.dump(std))
        
        if user_type == 'student':
            obj = {'user_id': user.id,
                   'first_name': data['first_name'],
                   'last_name': data['last_name'],
                   'DOB': data['DOB'],
                   'address': data['address'],
                   'phone_number': data['phone_number'],
                   'enrollment_date': data['enrollment_date'],
                   'department_id': data['department_id'],
                   'course_id': data['course_id'],
                   'teacher_id': data['teacher_id']
                   }

            std = Student(**obj)

            db.session.add(std)
            db.session.commit()

            return jsonify(std=studentSchema.dump(std))


if __name__ == "__main__":
    app.run(debug=True, port=5555)