from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

    discount = serializers.SerializerMethodField()

    def get_discount(self, obj):
        sub = obj.normal_price - obj.current_price

        return round((sub / obj.normal_price) * 100, 0)