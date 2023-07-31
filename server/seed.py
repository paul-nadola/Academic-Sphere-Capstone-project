# from faker import Faker
# from config import db, app
# from models import User, Students, Parents, Teachers, Admin

# fake = Faker()

# def create_users():
#     for _ in range(10):
#         user_name = fake.user_name()
#         email = fake.email()
#         password = fake.password()
#         user_type = fake.random_element(elements=("student", "parent", "teacher", "admin"))

#         user = User(user_name=user_name, email=email, password=password, user_type=user_type)
#         db.session.add(user)
#     db.session.commit()

# def create_students():
#     users = User.query.filter_by(user_type='student').all()
#     for user in users:
#         student_name = fake.name()
#         dob = fake.date_of_birth()
#         address = fake.address()
#         phone_number = fake.phone_number()
#         email = fake.email()
#         enrollment_date = fake.date_between(start_date='-1y', end_date='today')
#         department = fake.random_element(elements=("Science", "Arts", "Commerce"))
#         course = fake.random_element(elements=("Mathematics", "English", "History"))
#         grade = fake.random_element(elements=("A", "B", "C"))

#         student = Students(
#             user_id=user.id,
#             student_name=student_name,
#             DOB=dob,
#             address=address,
#             phone_number=phone_number,
#             email=email,
#             enrollment_date=enrollment_date,
#             department=department,
#             course=course,
#             grade=grade
#         )
#         db.session.add(student)
#     db.session.commit()

# def create_parents():
#     users = User.query.filter_by(user_type='parent').all()
#     students = Students.query.all()
#     for user in users:
#         student = fake.random_element(elements=students)
#         parent_name = fake.name()
#         dob = fake.date_of_birth()
#         address = fake.address()
#         phone_number = fake.phone_number()
#         email = fake.email()

#         parent = Parents(
#             user_id=user.id,
#             student_id=student.student_id,
#             parent_name=parent_name,
#             DOB=dob,
#             address=address,
#             phone_number=phone_number,
#             email=email
#         )
#         db.session.add(parent)
#     db.session.commit()

# def create_teachers():
#     users = User.query.filter_by(user_type='teacher').all()
#     students = Students.query.all()
#     for user in users:
#         student = fake.random_element(elements=students)
#         teacher_name = fake.name()
#         dob = fake.date_of_birth()
#         address = fake.address()
#         phone_number = fake.phone_number()
#         email = fake.email()
#         employment_date = fake.date_between(start_date='-5y', end_date='today')
#         department = fake.random_element(elements=("Science", "Arts", "Mathematics"))
#         course = fake.random_element(elements=("Physics", "Chemistry", "Biology"))
#         appraisal = fake.random_int(min=1, max=5)

#         teacher = Teachers(
#             user_id=user.id,
#             student_id=student.student_id,
#             teacher_name=teacher_name,
#             DOB=dob,
#             address=address,
#             phone_number=phone_number,
#             email=email,
#             employment_date=employment_date,
#             department=department,
#             course=course,
#             appraisal=appraisal
#         )
#         db.session.add(teacher)
#     db.session.commit()

# def create_admins():
#     users = User.query.filter_by(user_type='admin').all()
#     for user in users:
#         admin_name = fake.name()
#         dob = fake.date_of_birth()
#         address = fake.address()
#         phone_number = fake.phone_number()
#         email = fake.email()
#         employment_date = fake.date_between(start_date='-2y', end_date='today')
#         appraisal = fake.random_int(min=1, max=5)

#         admin = Admin(
#             user_id=user.id,
#             admin_name=admin_name,
#             DOB=dob,
#             address=address,
#             phone_number=phone_number,
#             email=email,
#             employment_date=employment_date,
#             appraisal=appraisal
#         )
#         db.session.add(admin)
#     db.session.commit()

# if __name__ == '__main__':
#     with app.app_context():
#         create_users()
#         create_students()
#         create_parents()
#         create_teachers()
#         create_admins()
from faker import Faker
from config import db, app
from models import User, Students, Parents, Teachers, Admin

fake = Faker()
app.app_context().push()

def create_users():
    for _ in range(10):
        user_name = fake.user_name()
        email = fake.email()
        password = fake.password()
        user_type = fake.random_element(elements=("student", "parent", "teacher", "admin"))

        user = User(user_name=user_name, email=email, password=password, user_type=user_type)
        db.session.add(user)
    db.session.commit()

def create_students():
    users = User.query.filter_by(user_type='student').all()
    for user in users:
        student_name = fake.name()
        dob = fake.date_of_birth()
        address = fake.address()
        phone_number = fake.phone_number()
        email = fake.email()
        enrollment_date = fake.date_between(start_date='-1y', end_date='today')
        department = fake.random_element(elements=("Science", "Arts", "Commerce"))
        course = fake.random_element(elements=("Mathematics", "English", "History"))
        grade = fake.random_element(elements=("A", "B", "C"))

        student = Students(
            user_id=user.id,
            student_name=student_name,
            DOB=dob,
            address=address,
            phone_number=phone_number,
            email=email,
            enrollment_date=enrollment_date,
            department=department,
            course=course,
            grade=grade
        )
        db.session.add(student)
    db.session.commit()

def create_parents():
    users = User.query.filter_by(user_type='parent').all()
    students = Students.query.all()
    for user in users:
        student = fake.random_element(elements=students)
        parent_name = fake.name()
        dob = fake.date_of_birth()
        address = fake.address()
        phone_number = fake.phone_number()
        email = fake.email()

        parent = Parents(
            user_id=user.id,
            student_id=student.student_id,
            parent_name=parent_name,
            DOB=dob,
            address=address,
            phone_number=phone_number,
            email=email
        )
        db.session.add(parent)
    db.session.commit()

def create_teachers():
    users = User.query.filter_by(user_type='teacher').all()
    students = Students.query.all()
    for user in users:
        student = fake.random_element(elements=students)
        teacher_name = fake.name()
        dob = fake.date_of_birth()
        address = fake.address()
        phone_number = fake.phone_number()
        email = fake.email()
        employment_date = fake.date_between(start_date='-5y', end_date='today')
        department = fake.random_element(elements=("Science", "Arts", "Mathematics"))
        course = fake.random_element(elements=("Physics", "Chemistry", "Biology"))
        appraisal = fake.random_int(min=1, max=5)

        teacher = Teachers(
            user_id=user.id,
            student_id=student.student_id,
            teacher_name=teacher_name,
            DOB=dob,
            address=address,
            phone_number=phone_number,
            email=email,
            employment_date=employment_date,
            department=department,
            course=course,
            appraisal=appraisal
        )
        db.session.add(teacher)
    db.session.commit()

def create_admins():
    users = User.query.filter_by(user_type='admin').all()
    for user in users:
        admin_name = fake.name()
        dob = fake.date_of_birth()
        address = fake.address()
        phone_number = fake.phone_number()
        email = fake.email()
        employment_date = fake.date_between(start_date='-2y', end_date='today')
        appraisal = fake.random_int(min=1, max=5)

        admin = Admin(
            user_id=user.id,
            admin_name=admin_name,
            DOB=dob,
            address=address,
            phone_number=phone_number,
            email=email,
            employment_date=employment_date,
            appraisal=appraisal
        )
        db.session.add(admin)
    db.session.commit()

if __name__ == '__main__':
    create_users()
    create_students()
    create_parents()
    create_teachers()
    create_admins()

