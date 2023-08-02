from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Account
from .serializer import AccountsSerializer
from django.contrib.auth.hashers import make_password, check_password

class AccountsView(ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountsSerializer

    def perform_create(self, serializer):
        password = make_password(serializer.validated_data['password'])
        serializer.save(password=password)

class AccountsDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountsSerializer
