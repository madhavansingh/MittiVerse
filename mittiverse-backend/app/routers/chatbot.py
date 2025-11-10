# GreenFund-test-Backend-backup/app/routers/chatbot.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from openai import APIError # Import error type
from app.soil_model import get_openai_client # Import the correct client function

router = APIRouter(prefix="/chatbot", tags=["Chatbot"])

class ChatRequest(BaseModel):
    prompt: str

def get_chatbot_system_prompt() -> str:
    return """
    You are MittiVerse , a friendly and knowledgeable AI assistant for Indian farmers.

    Your job is to help with climate-smart agriculture in India by answering questions about:
    - soil health and types (clay, loam, black soil, etc.)
    - organic and sustainable farming
    - pest and disease control
    - Indian crop selection (e.g., rice, wheat, millets, pulses)
    - irrigation methods and water conservation
    - seasonal weather tips and farming techniques
    - reducing carbon footprint and eco-friendly practices

    Always introduce yourself as MittiVerse (not GreenBot). Start conversations with “🌱 Namaste! I am MittiVerse, your AI guide for smart and sustainable farming in India.”

    Respond in the **same language or tone** the farmer uses:
    - If they ask in English, respond in English.
    - If they ask in Hindi, respond in Hindi.
    - If they use Hinglish (mixed Hindi + English), respond in Hinglish.
    - If they use another Indian language, respond in that language if possible.

    Be respectful, supportive, farmer-friendly, and concise. Avoid answering unrelated questions.
    """



@router.post("/ask")
async def ask_chatbot(request: ChatRequest):
    try:
        client = get_openai_client()
        completion = client.chat.completions.create(
            model="gpt-4o-mini", # Use a standard chat model
            messages=[
                {"role": "system", "content": get_chatbot_system_prompt()},
                {"role": "user", "content": request.prompt}
            ]
        )
        response_content = completion.choices[0].message.content
        return {"reply": response_content}
    except APIError as e:
        print(f"OpenAI API Error during chatbot request: {e}")
        raise HTTPException(status_code=e.status_code or 500, detail=f"AI chatbot failed: {e.message}")
    except Exception as e:
        print(f"Error calling OpenAI for chatbot: {e}")
        # Use a generic error message for the user in case of failure
        raise HTTPException(status_code=500, detail="Sorry, the chatbot encountered an error. Please try again later.")