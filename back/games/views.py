from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Game
from .serializer import GameSerializer

class GameView(ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


