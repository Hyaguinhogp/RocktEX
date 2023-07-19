from rest_framework.generics import ListCreateAPIView
from .models import Account
from .serializer import AccountsSerializer
from django.contrib.auth.hashers import make_password, check_password

class AccountsView(ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountsSerializer

    def perform_create(self, serializer):
        print(serializer.validated_data)
        password = make_password(serializer.validated_data['password'])
        serializer.save(password=password)