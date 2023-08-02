
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import datetime
from config import db, bcrypt, app


class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(40), index=True,
                          unique=True, nullable=False)
    email = db.Column(db.String(40), index=True, unique=True, nullable=False)
    _password_hash = db.Column(db.String(65), nullable=False)
    user_type = db.Column(db.String(40))

    student = db.relationship(
        'Student', backref='users', uselist=False, cascade='all')
    parent = db.relationship('Parent', backref='users',
                             uselist=False, cascade='all')
    teacher = db.relationship(
        'Teacher', backref='users', uselist=False, cascade='all')
    admin = db.relationship('Admin', backref='users',
                            uselist=False, cascade='all')
    superadmin = db.relationship(
        'SuperAdmin', backref='users', uselist=False, cascade='all')

    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        hashed_password = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = hashed_password.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

    def __repr__(self):
        return f'<User {self.user_name} | Type: {self.user_type}>'


student_units_table = db.Table('student_units',
                               db.Column('student_id', db.Integer, db.ForeignKey(
                                   'students.student_id'), primary_key=True),
                               db.Column('unit_id', db.Integer, db.ForeignKey(
                                   'units.unit_id'), primary_key=True)
                               )

student_assessment_table = db.Table('student_assessment',
                                    db.Column('student_id', db.Integer, db.ForeignKey(
                                        'students.student_id'), primary_key=True),
                                    db.Column('assessment_id', db.Integer, db.ForeignKey(
                                        'assessments.assessment_id'), primary_key=True)
                                    )
student_grade_table = db.Table('student_grade',
                               db.Column('student_id', db.Integer, db.ForeignKey(
                                   'students.student_id'), primary_key=True),
                               db.Column('grade_id', db.Integer, db.ForeignKey(
                                   'grades.grade_id'), primary_key=True)
                               )


class Student(db.Model):

    __tablename__ = 'students'

    student_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable=False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    enrollment_date = db.Column(db.String(100), nullable=False)
    department_id = db.Column(
        db.Integer, db.ForeignKey('departments.department_id'))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.course_id'))
    payment_id = db.Column(db.Integer, db.ForeignKey('payments.payment_id'))

    units = db.relationship('Unit', secondary=student_units_table,
                            back_populates='students', cascade='all')
    assessments = db.relationship('Assessment', secondary=student_assessment_table,
                                 back_populates='students', cascade='all')
    grades = db.relationship('Grade', secondary=student_grade_table,
                            back_populates='students', cascade='all')
    parent_guardian = db.relationship(
        'Parent', backref='student', cascade='all')
    teacher = db.relationship(
        'Teacher', backref='student', cascade='all')
    attendance = db.relationship(
        'StudentAttendance', backref='student', cascade='all')

    def __repr__(self):
        return f'<Student {self.last_name} | ID: {self.student_id}>'


class Parent(db.Model):

    __tablename__ = 'parents'

    parent_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable=False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    student_id = db.Column(db.Integer, db.ForeignKey('students.student_id'))

    enquiry = db.relationship(
        'Enquiry', backref='parent', cascade='all')

    def __repr__(self):
        return f'<Parent {self.last_name} | ID: {self.parent_id}>'


class Teacher(db.Model):

    __tablename__ = 'teachers'

    teacher_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable=False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    employment_date = db.Column(db.String(100), nullable=False)
    appraisal = db.Column(db.Integer)
    student_id = db.Column(db.Integer, db.ForeignKey('students.student_id'))
    department_id = db.Column(
        db.Integer, db.ForeignKey('departments.department_id'))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.course_id'))

    attendance = db.relationship(
        'TeacherAttendance', backref='teacher', cascade='all')
    leave = db.relationship(
        'LeaveOfAbsence', backref='teacher', cascade='all')
    response = db.relationship(
        'Response', backref='teacher', cascade='all')

    def __repr__(self):
        return f'<Teacher {self.last_name} | ID: {self.teacher_id}>'


class Admin(db.Model):

    __tablename__ = 'admins'

    admin_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable=False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    employment_date = db.Column(db.String(100), nullable=False)
    appraisal = db.Column(db.Integer)

    def __repr__(self):
        return f'<Admin {self.last_name} | ID: {self.admin_id}>'


class SuperAdmin(db.Model):

    __tablename__ = 'superadmins'

    super_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable=False)
    DOB = db.Column(db.Date, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    employment_date = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return f'<Admin {self.last_name} | ID: {self.super_id}>'


class Department(db.Model):

    __tablename__ = 'departments'

    department_id = db.Column(db.Integer, primary_key=True)
    department_name = db.Column(db.String(255), nullable=False)
    hod_name = db.Column(db.String(255), nullable=False)

    teachers = db.relationship(
        'Teacher', backref='department', cascade='all')
    students = db.relationship(
        'Student', backref='department', cascade='all')
    course = db.relationship(
        'Course', backref='department', cascade='all')

    def __repr__(self):
        return f'Department: {self.department_name} HOD:{self.hod_name}'


class Course(db.Model):

    __tablename__ = 'courses'

    course_id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(255), index=True, nullable=False)
    department_id = db.Column(
        db.Integer, db.ForeignKey('departments.department_id'))

    students = db.relationship(
        'Student', backref='course', cascade='all')
    teachers = db.relationship(
        'Teacher', backref='course', cascade='all')
    units = db.relationship('Unit', backref='course',
                            cascade='all')

    def __repr__(self):
        return f'Course: {self.course_name} ID:{self.course_id}'


class Unit(db.Model):

    __tablename__ = 'units'

    unit_id = db.Column(db.Integer, primary_key=True)
    unit_name = db.Column(db.String(255), nullable=False, index=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.course_id'))

    assessment = db.relationship(
        'Assessment', backref='unit', cascade='all')
    students = db.relationship('Student', secondary=student_units_table,
                               back_populates='units', cascade='all')

    def __repr__(self):
        return f'Unit: {self.unit_name} ID:{self.unit_id}'


class Assessment(db.Model):

    __tablename__ = 'assessments'

    assessment_id = db.Column(db.Integer, primary_key=True)
    assessment_name = db.Column(db.String(255), nullable=False, index=True)
    unit_id = db.Column(db.Integer, db.ForeignKey('units.unit_id'))

    students = db.relationship('Student', secondary=student_assessment_table,
                               back_populates='assessments', cascade='all')

    def __repr__(self):
        return f'Assessment: {self.assessment_name} ID:{self.assessment_id}'


class Grade(db.Model):

    __tablename__ = 'grades'

    grade_id = db.Column(db.Integer, primary_key=True)
    grade = db.Column(db.String(10), nullable=False)
    assessment_id = db.Column(
        db.Integer, db.ForeignKey('assessments.assessment_id'))

    students = db.relationship('Student', secondary=student_grade_table,
                               back_populates='grades', cascade='all',)

    def __repr__(self):
        return f'Grade: {self.grade} ID:{self.grade_id}'


class Payment(db.Model):
    __tablename__ = 'payments'

    payment_id = db.Column(db.Integer, primary_key=True)
    payment_type = db.Column(db.String(255), index=True, nullable=False)
    amount = db.Column(db.Integer)
    balance = db.Column(db.Integer)

    students = db.relationship(
        'Student', backref='payment', cascade='all')

    def __repr__(self):
        return f'Payment Name: {self.payment_type} ID:{self.payment_id}'


class TeacherAttendance(db.Model):

    __tablename__ = 'teacher_attendance'

    attendance_id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.teacher_id'))
    attendance = db.Column(db.String(20))

    def __repr__(self):
        return f'Date: {self.date} ID:{self.attendance_id}'


class StudentAttendance(db.Model):

    __tablename__ = 'student_attendance'

    attendance_id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    student_id = db.Column(db.Integer, db.ForeignKey('students.student_id'))
    attendance = db.Column(db.String(20))

    def __repr__(self):
        return f'Date: {self.date} ID:{self.attendance_id}'


class LeaveOfAbsence(db.Model):

    __tablename__ = 'leave_of_absence'

    leave_id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.teacher_id'))
    start = db.Column(db.DateTime)
    end = db.Column(db.DateTime)
    status = db.Column(db.String(25))

    def __repr__(self):
        return f'Date: {self.date} ID:{self.leave_id}'


class Enquiry(db.Model):

    __tablename__ = 'enquiries'

    enquiry_id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(255), index=True, nullable=False)
    body = db.Column(db.String, nullable=False)
    parent_id = db.Column(db.Integer, db.ForeignKey('parents.parent_id'))

    def __repr__(self):
        return f'Enquiry: {self.subject} ID:{self.parent_id}'


class Response(db.Model):

    __tablename__ = 'responses'

    response_id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(255), index=True, nullable=False)
    body = db.Column(db.String, nullable=False)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.teacher_id'))

    def __repr__(self):
        return f'Response: {self.subject} ID:{self.teacher_id}'


with app.app_context():
    db.create_all()
