from rest_framework import serializers
from .models import Account
from django.contrib.auth.hashers import make_password

class AccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'username', 'email', 'password', 'social_media', 'biography', 'url_image']
        depth = 1