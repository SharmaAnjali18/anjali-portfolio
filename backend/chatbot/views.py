from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .services import get_ai_response


@csrf_exempt
def chat(request):

    if request.method != "POST":
        return JsonResponse(
            {"error": "Only POST method allowed"},
            status=405
        )

    body = json.loads(request.body)

    message = body.get("message", "")

    reply = get_ai_response(message)

    return JsonResponse({
        "reply": reply
    })