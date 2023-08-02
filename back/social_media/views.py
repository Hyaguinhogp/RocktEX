from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import SocialMedia
from .serializer import SocialMediaSerializer

class SocialMediaView(ListCreateAPIView):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer

class SocialMediaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer
