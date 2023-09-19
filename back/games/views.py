from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Game
from .serializer import GameSerializer
import requests
import json

class GameView(ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def get(self, request, *args, **kwargs):
        games_request = requests.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/')
        games_ids = games_request.json()['applist']['apps']

        for i in range(1000,1003):
            game_id = str(games_ids[i]['appid'])
            game_request = requests.get('https://store.steampowered.com/api/appdetails/?appids=' + game_id).json()[game_id]
            game_success = game_request['success']
            game_data = game_request['data']

            if(game_success and not game_data['is_free']):
                print(game_data['name'])
                print(game_data['price_overview']['initial'])
                print(game_data['price_overview']['final'])

        """ game_request = requests.get('https://store.steampowered.com/api/appdetails/?appids=374320')
        game_data = game_request.json()
        print(game_data['374320']['data']['price_overview']) """
    
        return super().get(request, *args, **kwargs)


