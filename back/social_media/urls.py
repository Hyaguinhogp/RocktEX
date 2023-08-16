from django.urls import path
from .views import SocialMediaView, SocialMediaDetailView

urlpatterns = [
    path('social_media/', SocialMediaView.as_view()),
    path('social_media/<uuid:pk>/', SocialMediaDetailView.as_view()),
]