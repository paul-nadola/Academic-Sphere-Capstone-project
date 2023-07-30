from sqlalchemy_serializer import SerializerMixin
from config import db



class User(db.Model, SerializerMixin):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(40), index = True ,unique = True ,nullable=False)
    email = db.Column(db.String(40), index = True ,unique = True , nullable=False)
    password = db.Column(db.String(65), nullable=False)
    user_type = db.Column(db.String(40))

    student = db.relationship('Students', backref = 'users', uselist = False)
    parent = db.relationship('Parents', backref = 'users', uselist = False)
    teacher = db.relationship('Teachers', backref = 'users', uselist = False)
    admin = db.relationship('Admin', backref = 'users', uselist = False)

    def __repr__(self):
        return f'<User {self.user_name} | Type: {self.user_type}>'

class Students(db.Model, SerializerMixin):

    __tablename__ = 'Students'

    student_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    student_name = db.Column(db.String(255), nullable=False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    enrollment_date = db.Column(db.String(100), nullable=False)
    department = db.Column(db.String(100), nullable=False)
    course = db.Column(db.String(100), nullable=False)
    grade = db.Column(db.String(100), nullable=False)
    parent_guardian = db.relationship('Parents', backref = 'Students')
    teacher = db.relationship('Teachers', backref = 'Students')

    def __repr__(self):
        return f'<Student {self.student_name} | ID: {self.student_id}>'


class Parents(db.Model, SerializerMixin):

    __tablename__ = 'Parents'

    parent_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('Students.id'))
    parent_name = db.Column(db.String(255), nullable=False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<Parent {self.parent_name} | ID: {self.parent_id}>'
    
class Teachers(db.Model, SerializerMixin):

    __tablename__ = 'Teachers'

    teacher_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('Students.id'))
    teacher_name = db.Column(db.String(255), nullable=False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    employment_date = db.Column(db.String(100), nullable=False)
    department = db.Column(db.String(100), nullable=False)
    course = db.Column(db.String(100), nullable=False)
    appraisal = db.Column(db.Integer)

    def __repr__(self):
        return f'<Teacher {self.teacher_name} | ID: {self.teacher_id}>'


class Admin(db.Model, SerializerMixin):

    __tablename__ = 'Admin'

    admin_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    admin_name = db.Column(db.String(255), nullable=False)
    DOB = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    employment_date = db.Column(db.String(100), nullable=False)
    appraisal = db.Column(db.Integer)

    def __repr__(self):
        return f'<Admin {self.admin_name} | ID: {self.admin_id}>'

