from flask import Blueprint, request, jsonify
from app.services.ai_service import get_diagnosis, get_explanation

ai_bp = Blueprint("ai", __name__)

@ai_bp.route("/diagnose", methods=["POST"])
def diagnose():
    data = request.json
    symptoms = data.get("symptoms")
    diagnosis = get_diagnosis(symptoms)
    return jsonify({"diagnosis": diagnosis})

@ai_bp.route("/explain", methods=["POST"])
def explain():
    data = request.json
    symptoms = data.get("symptoms")
    explanation = get_explanation(symptoms)
    return jsonify({"explanation": explanation})