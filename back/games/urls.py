from django.urls import path
from .views import GameView, GameDetailView

urlpatterns = [
    path('games/', GameView.as_view()),
    path('games/<uuid:pk>/', GameDetailView.as_view()),
]