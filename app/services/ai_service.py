import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def get_diagnosis(symptoms):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Diagnose the following symptoms: {symptoms}",
        max_tokens=150,
    )
    return response.choices[0].text.strip()

def get_explanation(symptoms):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Explain the following symptoms: {symptoms}",
        max_tokens=150,
    )
    return response.choices[0].text.strip()