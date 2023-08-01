from flask_sqlalchemy import SQLAlchemy
from config import db, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property




class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(40), index = True ,unique = True , nullable=False)
    password = db.Column(db.String(65), nullable=False)
    user_type = db.Column(db.String(40))

    student = db.relationship('Students', backref = 'users', uselist = False)
    parent = db.relationship('Parents', backref = 'users', uselist = False)
    teacher = db.relationship('Teachers', backref = 'users', uselist = False)
    admin = db.relationship('Admin', backref = 'users', uselist = False)
    superadmin = db.relationship('SuperAdmin', backref = 'users', uselist = False)

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
    course = db.Column(db.String(100), nullable=False)
    grade = db.Column(db.String(100), nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('Departments.department_id'))


    parent_guardian = db.relationship('Parents', backref = 'Students')
    teacher = db.relationship('Teachers', backref = 'Students')
    course = db.relationship('Course', backref= 'Students')

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
    course = db.Column(db.String(100), nullable=False)
    appraisal = db.Column(db.Integer)
    student_id = db.Column(db.Integer, db.ForeignKey('Students.student_id'))
    department_id = db.Column(db.Integer, db.ForeignKey('Departments.department_id'))

    course = db.relationship('Course', backref= 'Teachers')

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

    teachers = db.relationship('Teachers', backref= 'Departments')
    students = db.relationship('Students', backref= 'Departments')
    course = db.relationship('Course', backref= 'Departments')

    def __repr__(self):
        return f'Department: {self.department_name} HOD:{self.hod_name}'
    
class Course(db.Model):
    
    __tablename__ = 'Course'

    course_id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(255), index= True, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('Departments.department_id'))
    student_id = db.Column(db.Integer, db.ForeignKey('Students.student_id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('Teachers.teacher_id'))
