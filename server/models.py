from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import datetime

bcrypt = Bcrypt()

db = SQLAlchemy()


class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(40), index = True ,unique = True ,nullable=False)
    email = db.Column(db.String(40), index = True ,unique = True , nullable=False)
    password = db.Column(db.String(65), nullable=False)
    user_type = db.Column(db.String(40))

    student = db.relationship('Students', backref = 'users', uselist = False, cascade='all, delete-orphan')
    parent = db.relationship('Parents', backref = 'users', uselist = False, cascade='all, delete-orphan')
    teacher = db.relationship('Teachers', backref = 'users', uselist = False, cascade='all, delete-orphan')
    admin = db.relationship('Admin', backref = 'users', uselist = False, cascade='all, delete-orphan')
    superadmin = db.relationship('SuperAdmin', backref = 'users', uselist = False, cascade='all, delete-orphan')

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
    db.Column('student_id', db.Integer, db.ForeignKey('Students.student_id'), primary_key=True),
    db.Column('units_id', db.Integer, db.ForeignKey('Units.units_id'), primary_key=True)
)

student_assessment_table = db.Table('student_assessment',
    db.Column('student_id', db.Integer, db.ForeignKey('Students.student_id'), primary_key=True),
    db.Column('assessment_id', db.Integer, db.ForeignKey('Assessment.assessment_id'), primary_key=True)
)
student_grade_table = db.Table('student_grade',
    db.Column('student_id', db.Integer, db.ForeignKey('Students.student_id'), primary_key=True),
    db.Column('grade_id', db.Integer, db.ForeignKey('Grade.grade_id'), primary_key=True)
)

class Students(db.Model):

    __tablename__ = 'Students'

    student_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable = False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    enrollment_date = db.Column(db.String(100), nullable=False)
    department = db.Column(db.String(100), nullable=False)
    grade = db.Column(db.String(100), nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('Departments.department_id'))
    course_id = db.Column(db.Integer, db.ForeignKey('Course.course_id'))
    payment_id = db.Column(db.Integer, db.ForeignKey('Payments.payment_id'))

    units = db.relationship('Units', secondary=student_units_table, back_populates='Students', cascade='all, delete-orphan')
    assesment = db.relationship('Assessment', secondary=student_assessment_table, back_populates='Students', cascade='all, delete-orphan')
    grade = db.relationship('Grades', secondary=student_grade_table, back_populates='Students', cascade='all, delete-orphan')
    parent_guardian = db.relationship('Parents', backref = 'Students', cascade='all, delete-orphan')
    teacher = db.relationship('Teachers', backref = 'Students', cascade='all, delete-orphan')
    attendance = db.relationship('StudentAttendance', backref='Students' ,cascade='all, delete-orphan')

    def __repr__(self):
        return f'<Student {self.last_name} | ID: {self.student_id}>'


class Parents(db.Model):

    __tablename__ = 'Parents'

    parent_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable = False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    student_id = db.Column(db.Integer, db.ForeignKey('Students.student_id'))

    enquiry = db.relationship('Enquiry', backref='Parents', cascade='all, delete-orphan')
    
    def __repr__(self):
        return f'<Parent {self.last_name} | ID: {self.parent_id}>'
    
class Teachers(db.Model):

    __tablename__ = 'Teachers'

    teacher_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable = False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    employment_date = db.Column(db.String(100), nullable=False)
    department = db.Column(db.String(100), nullable=False)
    appraisal = db.Column(db.Integer)
    student_id = db.Column(db.Integer, db.ForeignKey('Students.student_id'))
    department_id = db.Column(db.Integer, db.ForeignKey('Departments.department_id'))
    course_id = db.Column(db.Integer, db.ForeignKey('Course.course_id'))

    attendance = db.relationship('TeacherAttendance', backref='Teachers' ,cascade='all, delete-orphan')
    leave = db.relationship('LeaveOfAbsence', backref='Teachers' ,cascade='all, delete-orphan')
    response = db.relationship('Response', backref='Teachers', cascade='all, delete-orphan')

    def __repr__(self):
        return f'<Teacher {self.last_name} | ID: {self.teacher_id}>'


class Admin(db.Model):

    __tablename__ = 'Admin'

    admin_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable = False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    employment_date = db.Column(db.String(100), nullable=False)
    appraisal = db.Column(db.Integer)

    def __repr__(self):
        return f'<Admin {self.last_name} | ID: {self.admin_id}>'

class SuperAdmin(db.Model):

    __tablename__ = 'SuperAdmin'

    super_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(255), index=True, nullable=False)
    last_name = db.Column(db.String(255), index=True, nullable = False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    employment_date = db.Column(db.String(100), nullable=False)

    
    def __repr__(self):
        return f'<Admin {self.last_name} | ID: {self.super_id}>'
    
class Departments(db.Model):

    __tablename__ = 'Departments'

    department_id = db.Column(db.Integer, primary_key=True)
    department_name = db.Column(db.String(255), nullable=False)
    hod_name = db.Column(db.String(255), nullable=False)

    teachers = db.relationship('Teachers', backref= 'Departments', cascade='all, delete-orphan')
    students = db.relationship('Students', backref= 'Departments', cascade='all, delete-orphan')
    course = db.relationship('Course', backref= 'Departments', cascade='all, delete-orphan')

    def __repr__(self):
        return f'Department: {self.department_name} HOD:{self.hod_name}'
    

class Course(db.Model):
    
    __tablename__ = 'Course'

    course_id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(255), index= True, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('Departments.department_id'))

    students = db.relationship('Students', backref='Course', cascade='all, delete-orphan')
    teachers = db.relationship('Teachers', backref='Course', cascade='all, delete-orphan')
    units= db.relationship('Units', backref='Course', cascade='all, delete-orphan')

    def __repr__(self):
        return f'Course: {self.course_name} ID:{self.course_id}'
    
    
class Units(db.Model):

    __tablename__ = 'Units'

    unit_id = db.Column(db.Integer, primary_key=True)
    unit_name = db.Column(db.String(255), nullable=False, index=True)
    course_id = db.Column(db.Integer, db.ForeignKey('Course.course_id'))

    assessment= db.relationship('Assessment', backref='Units', cascade='all, delete-orphan')
    students = db.relationship('Students', secondary=student_units_table, back_populates='Units', cascade='all, delete-orphan')

    def __repr__(self):
        return f'Unit: {self.unit_name} ID:{self.unit_id}'

    
class Assessment(db.Model):

    __tablename__ = 'Assessment'

    assessment_id = db.Column(db.Integer, primary_key=True)
    assessment_name = db.Column(db.String(255), nullable=False, index=True)
    unit_id = db.Column(db.Integer, db.ForeignKey('Units.unit_id'))

    students = db.relationship('Students', secondary=student_units_table, back_populates='Assessment', cascade='all, delete-orphan')

    def __repr__(self):
        return f'Assessment: {self.assessment_name} ID:{self.assessment_id}'
    
class Grades(db.Model):

    __tablename__ = 'Grades'

    grade_id = db.Column(db.Integer, primary_key=True)
    grade = db.Column(db.String(10), nullable=False)
    assessment_id = db.Column(db.Integer, db.ForeignKey('Assessment.assessment_id'))

    students = db.relationship('Students', secondary=student_grade_table, back_populates='Grades', cascade='all, delete-orphan')

    def __repr__(self):
        return f'Grade: {self.grade} ID:{self.grade_id}'



class Payments(db.Model):
    __tablename__ = 'Payments'

    payment_id = db.Column(db.Integer, primary_key=True)
    payment_type = db.Column(db.String(255), index= True, nullable=False)
    amount = db.Column(db.Integer)
    balance = db.Column(db.Integer)


    students = db.relationship('Students', backref='Payments' ,cascade='all, delete-orphan')
    
    def __repr__(self):
        return f'Payment Name: {self.payment_type} ID:{self.payment_id}'
    

class TeacherAttendance(db.Model):

    __tablename__ = 'TeacherAttendance'

    attendance_id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    teacher_id = db.Column(db.Integer, db.ForeignKey('Teachers.teacher_id'))
    attendance=db.Column(db.String(20))

    def __repr__(self):
        return f'Date: {self.date} ID:{self.attendance_id}' 
    

class StudentAttendance(db.Model):

    __tablename__ = 'StudentAttendance'

    attendance_id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    student_id = db.Column(db.Integer, db.ForeignKey('Students.student_id'))
    attendance=db.Column(db.String(20))

    def __repr__(self):
        return f'Date: {self.date} ID:{self.attendance_id}' 
    

class LeaveOfAbsence(db.Model):

    __tablename__ = 'LeaveOfAbsence'

    leave_id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    teacher_id = db.Column(db.Integer, db.ForeignKey('Teachers.teacher_id'))
    start=db.Column(db.DateTime)
    start=db.Column(db.DateTime)
    status = db.Column(db.String(25))

    def __repr__(self):
        return f'Date: {self.date} ID:{self.leave_id}' 
    


class Enquiry(db.Model):

    __tablename__ = 'enquiry'

    enquiry_id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(255), index=True, nullable=False)
    body = db.Column(db.String, nullable=False)
    parent_id = db.Column(db.Integer, db.ForeignKey('Parents.parent_id'))

    def __repr__(self):
        return f'Enquiry: {self.subject} ID:{self.parent_id}' 
    

class Response(db.Model):

    __tablename__ = 'Response'

    response_id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(255), index=True, nullable=False)
    body = db.Column(db.String, nullable=False)
    teacher_id = db.Column(db.Integer, db.ForeignKey('Teachers.teacher_id'))

    def __repr__(self):
        return f'Response: {self.subject} ID:{self.teacher_id}' 



