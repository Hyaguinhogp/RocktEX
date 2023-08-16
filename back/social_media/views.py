from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView
from .models import SocialMedia
from .serializer import SocialMediaSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
import jwt
from _core.settings import SECRET_KEY

class SocialMediaView(CreateAPIView):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        token = request.auth.token
        decoded_data = jwt.decode(token, key=SECRET_KEY, algorithms='HS256')
        request.data['account'] = decoded_data['user_id']
        return super().post(request, *args, **kwargs)

class SocialMediaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
