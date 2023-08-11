from flask import jsonify, request, Blueprint
from models import User, Teacher, Unit, Student, Assessment, Grade, StudentAttendance
from functools import wraps
from flask_jwt_extended import get_jwt_identity, jwt_required
from schemas import teacherSchema, studentSchema, unitSchema, assessmentSchema, gradeSchema, studentAttendanceSchema
from config import db

student_bp = Blueprint("student", __name__)

@student_bp.route('/student')
@jwt_required()
def student():
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type.lower() != 'student':
        return {"msg": "Unauthorized"}

    student = Student.query.filter_by(user_id=user.id).first()

    return jsonify(student=studentSchema.dump(student)), 200