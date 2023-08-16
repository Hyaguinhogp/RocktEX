from rest_framework.permissions import BasePermission
from rest_framework.request import Request
import jwt
from _core.settings import SECRET_KEY

class IsAuthenticated(BasePermission):

    def has_permission(self, request: Request, view):
        token = request.auth.token
        decoded_data = jwt.decode(token, key=SECRET_KEY, algorithms='HS256')
        request.data['account'] = decoded_data['user_id']

        return bool(request.user and request.user.is_authenticated)