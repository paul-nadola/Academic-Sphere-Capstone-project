from flask import jsonify, request, Blueprint
from models import User, Teacher, Admin, Student, Parent, Department, Course, Unit, TeacherAttendance, LeaveOfAbsence
from functools import wraps
from flask_jwt_extended import get_jwt_identity, jwt_required
from schemas import adminSchema, teacherSchema, studentSchema, parentSchema, departmentSchema, teacherAttendanceSchema, courseSchema, unitSchema, leaveOfAbsenceSchema
from config import db

admin_bp = Blueprint("admin", __name__)

# # ADMIN FUNCTIONALITY


@admin_bp.route('/admin_create', methods=['GET', 'POST'])
@jwt_required()
def admin_create():
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type.lower() != 'admin':
        return {"msg": "Unauthorized"}

    if request.method == 'GET':
        current = Admin.query.filter_by(user_id=user.id).first()
        teachers = Teacher.query.all()
        students = Student.query.all()
        parents = Parent.query.all()

        return jsonify(current=adminSchema.dump(current),
                       teachers=teacherSchema.dump(teachers, many=True),
                       students=studentSchema.dump(students, many=True),
                       parents=parentSchema.dump(parents, many=True)
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
                   'payment_id': data['payment_id'],
                   'teacher_id': data['teacher_id'],
                   }

            std = Student(**obj)

            db.session.add(std)
            db.session.commit()

            return jsonify(std=studentSchema.dump(std))

        if user_type == 'parent':
            obj = {'user_id': user.id,
                   'first_name': data['first_name'],
                   'last_name': data['last_name'],
                   'address': data['address'],
                   'phone_number': data['phone_number'],
                   'student_id': data['student_id']
                   }

            parent = Parent(**obj)

            db.session.add(parent)
            db.session.commit()

            return jsonify(parent=parentSchema.dump(parent))


@admin_bp.route('/admin_create_two/<string:name>', methods=['GET', 'POST'])
@jwt_required()
def admin_create_two(name):
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type.lower() != 'admin':
        return {"msg": "Unauthorized"}

    if request.method == 'GET':
        departments = Department.query.all()
        courses = Course.query.all()
        units = Unit.query.all()
        attendance = TeacherAttendance.query.all()
        leave = LeaveOfAbsence.query.all()

        return jsonify(departments=departmentSchema.dump(departments, many=True),
                       courses=courseSchema.dump(courses, many=True),
                       units=unitSchema.dump(units, many=True),
                       tr_attendance=teacherAttendanceSchema.dump(
            attendance, many=True),
            leave=leaveOfAbsenceSchema.dump(leave, many=True)
        )

    data = request.get_json()
    if request.method == 'POST':
        if name.lower() == 'department':
            dep = Department(**data)

            db.session.add(dep)
            db.session.commit()

            return jsonify(department=departmentSchema.dump(dep))

        if name.lower() == 'course':
            course = Course(**data)

            db.session.add(course)
            db.session.commit()

            return jsonify(course=courseSchema.dump(course))

        if name.lower() == 'unit':
            unit = Unit(**data)

            db.session.add(unit)
            db.session.commit()

            return jsonify(unit=unitSchema.dump(unit))

        if name.lower() == 'teacherattendance':
            for datum in data:
                attendance = TeacherAttendance(**datum)

                db.session.add(attendance)
                db.session.commit()

            return {"msg": "Attendance marked"}, 200

        if name.lower() == 'leave':

            leave = LeaveOfAbsence(**data)

            db.session.add(leave)
            db.session.commit()

            return jsonify(leave=leaveOfAbsenceSchema.dump(leave)), 200

        if name.lower() == 'leave':
            pass


def admin_resource(resource_model, resource_schema, resource_name):
    def decorator(func):
        @wraps(func)
        @jwt_required()
        def wrapper(id):
            token_data = get_jwt_identity()
            user_email = token_data['email']
            user = User.query.filter_by(email=user_email).first()
            if user.user_type.lower() != 'admin':
                return {"msg": "Unauthorized"}

            res_id = resource_name + '_id'
            resource = resource_model.query.filter_by(**{res_id: id}).first()

            if not resource:
                return {"msg": f"{resource_name} does not exist"}, 400

            if request.method == 'GET':
                return jsonify({resource_name: resource_schema.dump(resource)}), 200

            if request.method == 'PATCH':
                data = request.get_json()
                for key, value in data.items():
                    setattr(resource, key, value)
                db.session.commit()
                return jsonify({resource_name: resource_schema.dump(resource)}), 200

            if request.method == 'DELETE':
                db.session.delete(resource)
                db.session.commit()
                return {"msg": f"{resource_name} deleted successfully"}, 200

        return wrapper
    return decorator


@admin_bp.route('/admin_teacher/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@admin_resource(Teacher, teacherSchema, 'teacher')
def admin_teacher(id):
    pass


@admin_bp.route('/admin_student/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@admin_resource(Student, studentSchema, 'student')
def admin_student(id):
    pass


@admin_bp.route('/admin_parent/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@admin_resource(Parent, parentSchema, 'parent')
def admin_parent(id):
    pass


@admin_bp.route('/admin_department/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@admin_resource(Department, departmentSchema, 'department')
def admin_department(id):
    pass


@admin_bp.route('/admin_course/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@admin_resource(Course, courseSchema, 'course')
def admin_course(id):
    pass


@admin_bp.route('/admin_unit/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@admin_resource(Unit, unitSchema, 'unit')
def admin_unit(id):
    pass


@admin_bp.route('/admin_teacherattendance/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@admin_resource(TeacherAttendance, teacherAttendanceSchema, 'attendance')
def admin_teacherattendance(id):
    pass


@admin_bp.route('/admin_leave/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@admin_resource(LeaveOfAbsence, leaveOfAbsenceSchema, 'leave')
def admin_leave(id):
    pass
