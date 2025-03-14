from app import mongo

class Chat:
    @staticmethod
    def save_chat(user_id, symptoms, diagnosis, explanation):
        chat = {
            "user_id": user_id,
            "symptoms": symptoms,
            "diagnosis": diagnosis,
            "explanation": explanation,
        }
        mongo.db.chats.insert_one(chat)