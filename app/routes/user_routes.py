from flask import Blueprint, request, jsonify
from app.models.chat_model import Chat

user_bp = Blueprint("user", __name__)

@user_bp.route("/save-chat", methods=["POST"])
def save_chat():
    data = request.json
    user_id = data.get("user_id")
    symptoms = data.get("symptoms")
    diagnosis = data.get("diagnosis")
    explanation = data.get("explanation")
    Chat.save_chat(user_id, symptoms, diagnosis, explanation)
    return jsonify({"message": "Chat saved successfully!"})