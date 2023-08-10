from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields
from models import User, Parent, Teacher, Student, Admin, SuperAdmin, Department, Course, Unit, Assessment, Grade, Payment, TeacherAttendance, StudentAttendance, LeaveOfAbsence



class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        exclude =['_password_hash']


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
    parent = fields.Nested("ParentSchema", exclude=("student",))
    student_assessment = fields.Nested(
        "GradeSchema", many=True, only=("assessment", "score",))


class ParentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Parent
        load_instance = True

    user_name = fields.String(attribute='users.user_name')
    email = fields.String(attribute='users.email')
    user_id = fields.String(attribute='users.id')
    student = fields.Nested(StudentSchema, only=(
        "student_id", "first_name", "last_name", "user_name",))


class DepartmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Department
        load_instance = True

    courses = fields.Nested("CourseSchema", many=True, only=("course_name",))
    teachers = fields.Nested(
        "TeacherSchema", only=("first_name", "last_name",))


class CourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Course
        load_instance = True

    department = fields.Nested(DepartmentSchema, only=("department_name",))
    units = fields.Nested("UnitSchema", only=("unit_name",), many=True)


class UnitSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Unit
        load_instance = True
    # course = fields.Nested("CourseSchema", only=("course_name",))
    course = fields.Function(lambda obj: obj.course.course_name)


class AssessmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Assessment
        load_instance = True

    student_assessment = fields.Nested(
        "GradeSchema", many=True, only=("student", "score",))
    # unit = fields.Nested(UnitSchema, only=("unit_name",))
    unit = fields.Function(lambda obj: obj.unit.unit_name)


class GradeSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Grade
        load_instance = True

    student = fields.Function(lambda obj: obj.student.first_name)
    assessment = fields.Function(lambda obj: obj.assessment.assessment_name)


class PaymentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Payment
        load_instance = True


class TeacherAttendanceSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = TeacherAttendance
        load_instance = True
    teacher = fields.Nested(TeacherSchema, only=("first_name", "user_name",))


class StudentAttendanceSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = StudentAttendance
        load_instance = True

    # student = fields.Nested(StudentSchema, only=("first_name",))
    student = fields.Function(lambda obj: obj.student.first_name)


class LeaveOfAbsenceSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = LeaveOfAbsence
        load_instance = True

    teacher = fields.Nested("TeacherSchema", only=("user_name",))


userSchema = UserSchema()
superAdminSchema = SuperAdminSchema()
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