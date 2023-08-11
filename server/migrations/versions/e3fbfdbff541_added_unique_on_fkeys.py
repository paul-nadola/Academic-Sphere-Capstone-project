"""added unique on fkeys

Revision ID: e3fbfdbff541
Revises: b41a7c54507b
Create Date: 2023-08-10 12:11:36.853512

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e3fbfdbff541'
down_revision = 'b41a7c54507b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('admins', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['user_id'])

    with op.batch_alter_table('assessments', schema=None) as batch_op:
        batch_op.drop_index('ix_assessments_assessment_name')
        batch_op.create_index(batch_op.f('ix_assessments_assessment_name'), ['assessment_name'], unique=True)

    with op.batch_alter_table('courses', schema=None) as batch_op:
        batch_op.drop_index('ix_courses_course_name')
        batch_op.create_index(batch_op.f('ix_courses_course_name'), ['course_name'], unique=True)

    with op.batch_alter_table('leave_of_absence', schema=None) as batch_op:
        batch_op.alter_column('teacher_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['teacher_id'])

    with op.batch_alter_table('parents', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['user_id'])

    with op.batch_alter_table('student_attendance', schema=None) as batch_op:
        batch_op.alter_column('student_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['student_id'])

    with op.batch_alter_table('students', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['user_id'])

    with op.batch_alter_table('superadmins', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['user_id'])

    with op.batch_alter_table('teacher_attendance', schema=None) as batch_op:
        batch_op.alter_column('teacher_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['teacher_id'])

    with op.batch_alter_table('teachers', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['user_id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('teachers', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('teacher_attendance', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('teacher_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('superadmins', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('students', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('student_attendance', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('student_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('parents', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('leave_of_absence', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('teacher_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('courses', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_courses_course_name'))
        batch_op.create_index('ix_courses_course_name', ['course_name'], unique=False)

    with op.batch_alter_table('assessments', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_assessments_assessment_name'))
        batch_op.create_index('ix_assessments_assessment_name', ['assessment_name'], unique=False)

    with op.batch_alter_table('admins', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    # ### end Alembic commands ###
