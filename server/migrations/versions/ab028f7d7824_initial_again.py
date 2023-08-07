"""Initial again

Revision ID: ab028f7d7824
Revises: 
Create Date: 2023-08-07 14:35:46.730665

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ab028f7d7824'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('assessments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('student_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'students', ['student_id'], ['student_id'])

    with op.batch_alter_table('leave_of_absence', schema=None) as batch_op:
        batch_op.drop_column('status')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('leave_of_absence', schema=None) as batch_op:
        batch_op.add_column(sa.Column('status', sa.VARCHAR(length=25), autoincrement=False, nullable=True))

    with op.batch_alter_table('assessments', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('student_id')

    # ### end Alembic commands ###