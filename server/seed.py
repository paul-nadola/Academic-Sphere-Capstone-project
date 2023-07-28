from config import app, db
from random import randint, choice as rc
from faker import Faker
from models import Admin, Teacher, Guardian, Student, Course, Department, Payroll, Leave, StudentAttendace, TeacherAttendance, OtherExpenses

fake = Faker()

with app.app_context():

    admins = []
    admpassword = 'adm123'
    for i in range(5):
        admin = Admin(first_name=fake.first_name(), last_name=fake.last_name(
        ), email=fake.email(), password_hash=admpassword, tel=fake.phone_number())
        admins.append(admin)

    db.session.add_all(admins)
    db.session.commit()
    
    guardians = []
