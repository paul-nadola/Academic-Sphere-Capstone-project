from flask import jsonify, request, Blueprint
from models import User, Teacher, Unit, Student, Assessment, Grade, StudentAttendance
from functools import wraps
from flask_jwt_extended import get_jwt_identity, jwt_required
from schemas import teacherSchema, studentSchema, unitSchema, assessmentSchema, gradeSchema, studentAttendanceSchema
from config import db

teacher_bp = Blueprint("teacher", __name__)


@teacher_bp.route('/teacher', methods=['GET', 'POST'])
@jwt_required()
def teacher():
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type.lower() != 'teacher':
        return {"msg": "Unauthorized"}

    if request.method == 'GET':
        current = Teacher.query.filter_by(user_id=user.id).first()
        units = Unit.query.all()
        students = Student.query.all()
        assessments = Assessment.query.all()
        grades = Grade.query.all()
        std_attendance = StudentAttendance.query.all()

        return jsonify(current=teacherSchema.dump(current), units=unitSchema.dump(units, many=True),
                       students=studentSchema.dump(students, many=True),
                       assessments=assessmentSchema.dump(
                           assessments, many=True),
                       grades=gradeSchema.dump(grades, many=True),
                       std_attendance=studentAttendanceSchema.dump(
                           std_attendance, many=True)
                       )


@teacher_bp.route('/teacher/<string:name>', methods=['POST'])
@jwt_required()
def teacher_post(name):
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type.lower() != 'teacher':
        return {"msg": "Unauthorized"}

    if request.method == 'POST':
        data = request.get_json()

        if name == "assessment":
            ass = Assessment(**data)

            db.session.add(ass)
            db.session.commit()

            return jsonify(data=assessmentSchema.dump(ass)), 200

        if name == "grades":
            for datum in data:
                grades = Grade(**datum)

                db.session.add(grades)
                db.session.commit()

            return {"msg": "grading done"}, 200

        if name == "attendance":
            for datum in data:
                attendance = StudentAttendance(**datum)

                db.session.add(attendance)
                db.session.commit()

            return {"msg": "Attendance marked"}, 200


def teacher_resource(resource_model, resource_schema, resource_name):
    def decorator(func):
        @wraps(func)
        @jwt_required()
        def wrapper(id):
            token_data = get_jwt_identity()
            user_email = token_data['email']
            user = User.query.filter_by(email=user_email).first()
            if user.user_type.lower() != 'teacher':
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


@teacher_bp.route('/teacher_assessment/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@teacher_resource(Assessment, assessmentSchema, 'assessment')
def teacher_assessment(id):
    pass


@teacher_bp.route('/teacher_grades/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@teacher_resource(Grade, gradeSchema, 'grade')
def teacher_grade(id):
    pass


@teacher_bp.route('/teacher_attendance/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@teacher_resource(StudentAttendance, studentAttendanceSchema, 'attendance')
def teacher_attendance(id):
    pass
