from config import app, bcrypt
import random
import string
from models import db, User, Admin,SuperAdmin,Parent,Student,Teacher, Payment
# Create a new payment object
# new_payment = Payment(
#     payment_type='School Fees',
#     amount=30000,
#     balance= 5000
# )
new_student = Student(
    user_id=10,
    first_name='Pau',
    last_name='Naddy',
    DOB='1995-08-10',
    address='123 Main St',
    phone_number='555-5678',
    enrollment_date='2023-08-10',
    department_id=1,
    course_id=1,
    payment_id=2,
    teacher_id=4
)

if __name__ == '__main__':
    with app.app_context():
# Add the new parent object to the session
        db.session.add(new_student)

        # Commit the session to save the changes
        db.session.commit()

# # Create a new parent object
# new_parent = Parent(
#     user_id=12,
#     first_name='Mzazi',
#     last_name='Flani',
#     address='123 Main St',
#     phone_number='555-1234',
#     student_id=6
# )
# if __name__ == '__main__':
#     with app.app_context():
# # Add the new parent object to the session
#         db.session.add(new_parent)

#         # Commit the session to save the changes
#         db.session.commit()

# def generate_random_string(length=10):
#     return ''.join(random.choices(string.ascii_letters, k=length))

# def create_seed_data():
#     # Create database tables
#     db.create_all()

#     # Create SuperAdmin
#     super_admin_user = User(
#         user_name='superadmin',
#         email='superadmin@example.com',
#         _password_hash=bcrypt.generate_password_hash(generate_random_string()).decode('utf-8'),
#         user_type='superadmin',
#     )
#     db.session.add(super_admin_user)
#     db.session.commit()
#     super_admin = SuperAdmin(
#         user_id=super_admin_user.id,
#         first_name='John',
#         last_name='Doe',
#         DOB='1990-01-01',
#         address='123 Main Street',
#         phone_number='123-456-7890',
#         employment_date='2020-01-01',
#     )
#     db.session.add(super_admin)
#     db.session.commit()

#     # Create Students
#     students = []
#     for i in range(1, 11):
#         user = User(
#             user_name=f'student{i}',
#             email=f'student{i}@example.com',
#             _password_hash=bcrypt.generate_password_hash(generate_random_string()).decode('utf-8'),
#             user_type='student',
#         )
#         db.session.add(user)
#         db.session.commit()
#         student = Student(
#             user_id=user.id,
#             first_name=f'Student{i}',
#             last_name=f'Last{i}',
#             DOB='2000-01-01',
#             address=f'Student{i} Address',
#             phone_number=f'123-456-789{i}',
#             enrollment_date='2022-01-01',
#             department=f'Department{i}',
#             course=f'Course{i}',
#             grade=f'A',
#         )
#         students.append(student)
#         db.session.add(student)
#         db.session.commit()

#     # Create Parents
#     parents = []
#     for i in range(1, 6):
#         user = User(
#             user_name=f'parent{i}',
#             email=f'parent{i}@example.com',
#             _password_hash=bcrypt.generate_password_hash(generate_random_string()).decode('utf-8'),
#             user_type='parent',
#         )
#         db.session.add(user)
#         db.session.commit()
#         parent = Parent(
#             user_id=user.id,
#             first_name=f'Parent{i}',
#             last_name=f'Last{i}',
#             DOB='1980-01-01',
#             address=f'Parent{i} Address',
#             phone_number=f'987-654-321{i}',
#             student_id=random.choice(students)
#         )
#         parents.append(parent)
#         db.session.add(parent)
#     db.session.commit()

#     # Create Teachers
#     for i in range(1, 6):
#         user = User(
#             user_name=f'teacher{i}',
#             email=f'teacher{i}@example.com',
#             _password_hash=bcrypt.generate_password_hash(generate_random_string()).decode('utf-8'),
#             user_type='teacher',
#         )
#         db.session.add(user)
#         db.session.commit()
#         teacher = Teacher(
#             user_id=user.id,
#             first_name=f'Teacher{i}',
#             last_name=f'Last{i}',
#             DOB='1985-01-01',
#             address=f'Teacher{i} Address',
#             phone_number=f'555-555-555{i}',
#             employment_date='2021-01-01',
#             department=f'Department{i}',
#             course=f'Course{i}',
#             appraisal=random.randint(1, 5),
#             student_id=random.choice(students)
#         )
#         db.session.add(teacher)
#     db.session.commit()

#     # Create Admins
#     for i in range(1, 6):
#         user = User(
#             user_name=f'admin{i}',
#             email=f'admin{i}@example.com',
#             _password_hash=bcrypt.generate_password_hash(generate_random_string()).decode('utf-8'),
#             user_type='admin',
#         )
#         db.session.add(user)
#         db.session.commit()
#         admin = Admin(
#             user_id=user.id,
#             first_name=f'Admin{i}',
#             last_name=f'Last{i}',
#             DOB='1975-01-01',
#             address=f'Admin{i} Address',
#             phone_number=f'111-222-333{i}',
#             employment_date='2020-01-01',
#             appraisal=random.randint(1, 5),
#         )
#         db.session.add(admin)

#     # Commit changes to the database
#     db.session.commit()

# if __name__ == '__main__':
#     with app.app_context():
#     # Replace 'your_flask_app' with the name of your Flask app instance
#     # Make sure to have your Flask app initialized before running this script
#     # Example: from your_flask_app import app
#     # Note: The app instance should be imported before creating the seed data.
#         create_seed_data()