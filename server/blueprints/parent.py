from flask import jsonify, request
from schemas import parentSchema
from flask import Blueprint
from models import User, Parent
from flask_jwt_extended import get_jwt_identity, jwt_required


parent_bp = Blueprint("parent", __name__)

@parent_bp.route('/parent')
@jwt_required()
def parent():
    token_data = get_jwt_identity()
    user_email = token_data['email']
    user = User.query.filter_by(email=user_email).first()
    if user.user_type.lower() != 'parent':
        return {"msg": "Unauthorized"}

    parent = Parent.query.filter_by(user_id=user.id).first()

    return jsonify(parent=parentSchema.dump(parent)), 200