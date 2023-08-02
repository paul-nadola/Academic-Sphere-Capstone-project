from config import app, db
from models import User, SuperAdmin
import datetime

with app.app_context():
    super_admin_user = User(
        user_name='superadmin',
        email='superadmin@example.com',
        password_hash='1234',
        user_type='superadmin',
    )
    db.session.add(super_admin_user)
    db.session.commit()
    super_admin = SuperAdmin(
        user_id=super_admin_user.id,
        first_name='John',
        last_name='Doe',
        DOB=datetime.date(1990, 1, 1),
        address='123 Main Street',
        phone_number='123-456-7890',
        employment_date=datetime.date(2020, 1, 1),
    )
    db.session.add(super_admin)
    db.session.commit()
