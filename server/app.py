from flask import jsonify, request
from models import User
from config import app, db
from flask_jwt_extended import get_jwt_identity, jwt_required, JWTManager
from schemas import userSchema

from blueprints.parent import parent_bp
from blueprints.login import login_bp
from blueprints.superadmin import superadmin_bp
from blueprints.admin import admin_bp
from blueprints.teacher import teacher_bp
from blueprints.student import student_bp

jwt = JWTManager(app)
app.register_blueprint(parent_bp)
app.register_blueprint(login_bp)
app.register_blueprint(superadmin_bp)
app.register_blueprint(admin_bp)
app.register_blueprint(teacher_bp)
app.register_blueprint(student_bp)


@app.route('/session', methods=['POST'])
@jwt_required()
def session():
    token_data = get_jwt_identity()
    email = token_data['email']
    user = User.query.filter_by(email=email).first()
    return jsonify(user=userSchema.dump(user))


if __name__ == "__main__":
    app.run(debug=True, port=5555)
