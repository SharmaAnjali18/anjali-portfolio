import os
from google import genai
from .prompts import PORTFOLIO_CONTEXT

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def get_ai_response(user_message):
    prompt = f"""
{PORTFOLIO_CONTEXT}

User Question:

{user_message}
"""

    try:
        response = client.models.generate_content(
            model="models/gemini-flash-latest",
            contents=prompt,
        )
        return response.text

    except Exception as e:
        print("Gemini Error:", e)
        return "Sorry, I couldn't generate a response at the moment."