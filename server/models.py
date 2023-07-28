from sqlalchemy.ext.hybrid import hybrid_property
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

    students = db.relationship(
        'Student', secondary=guardian_student, back_populates='guardians')

    def __repr__(self):
        return f'Fist Name: {self.first_name}'


class Student(UserWithPassword):
    __tablename__ = "students"

    dob = db.Column(db.Date, nullable=False)
    enrolment_date = db.Column(db.Date, nullable=False)
    fee_balance = db.Column(db.Integer)
    amount_paid = db.Column(db.Integer)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))

    guardians = db.relationship(
        'Guardian', secondary=guardian_student, back_populates='students')

    def __repr__(self):
        return f'Fist Name: {self.first_name}'


class Teacher(UserWithPassword):
    __tablename__ = "teachers"

    tel = db.Column(db.Integer, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))

    students = db.relationship('Student', backref='teacher')

    def __repr__(self):
        return f'Fist Name: {self.first_name}'


class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))

    students = db.relationship('Student', backref='course')
    teachers = db.relationship('Teacher', backref='course')


class Department(db.Model):
    __tablename__ = "departments"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    courses = db.relationship('Course', backref='department')
    teachers = db.relationship('Teacher', backref='department')


class Payroll(db.Model):
    __tablename__ = "payrolls"

    id = db.Column(db.Integer, primary_key=True)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))
    salary = db.Column(db.Integer, nullable=False)

    teacher = db.relationship('Teacher', backref='salary')


class Leave(db.Model):
    __tablename__ = 'leaves'

    id = db.Column(db.Integer, primary_key=True)
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))

    teacher = db.relationship('Teacher', backref='leave')


class StudentAttendace(db.Model):
    __tablename__ = "student_attendance"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    present = db.Column(db.Boolean, default=False)
    student_id = db.Column(db.Integer, db.ForeignKey(
        'students.id'), nullable=False)

    student = db.relationship(
        'Student', backref=db.backref('attendance', lazy=True))


class TeacherAttendance(db.Model):
    __tablename__ = "teacher_attendance"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    present = db.Column(db.Boolean, default=False)
    teacher_id = db.Column(db.Integer, db.ForeignKey(
        'teachers.id'), nullable=False)

    teacher = db.relationship(
        'Teacher', backref=db.backref('attendance', lazy=True))


class OtherExpenses(db.Model):
    __tablename__ = 'expenses'

    id = db.Column(db.Integer, primary_key=True)

    expense_name = db.Column(db.String, nullable=False)
    amount = db.Column(db.Integer, nullable=False)
