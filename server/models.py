from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import Enum

from config import db, bcrypt


class UserWithPassword(db.Model):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)

    _password_hash = db.Column(db.String, nullable=False)

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


class Admin(UserWithPassword):
    __tablename__ = "admins"

    tel = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'Fist Name: {self.first_name}'


class Teacher(UserWithPassword):
    __tablename__ = "teachers"

    tel = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'Fist Name: {self.first_name}'


guardian_student = db.Table(
    'guardian_student',
    db.Column('guardian_id', db.Integer, db.ForeignKey(
        'guardians.id'), primary_key=True),
    db.Column('student_id', db.Integer, db.ForeignKey(
        'students.id'), primary_key=True)
)


class Guardian(UserWithPassword):
    __tablename__ = "guardians"

    tel = db.Column(db.Integer, nullable=False)

    child = db.relationship(
        'Student', secondary=guardian_student, back_populates='guardian')

    def __repr__(self):
        return f'Fist Name: {self.first_name}'


class Student(UserWithPassword):
    __tablename__ = "students"

    dob = db.Column(db.Date, nullable=False)
    enrolment_date = db.Column(db.Date, nullable=False)

    guardian = db.relationship(
        'Guardian', secondary=guardian_student, back_populates='student')

    def __repr__(self):
        return f'Fist Name: {self.first_name}'


# class Course(db.Model):
#     __tablename__ = 'courses'
