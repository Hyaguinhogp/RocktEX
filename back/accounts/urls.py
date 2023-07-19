from django.urls import path
from rest_framework_simplejwt import views
from .views import AccountsView, AccountsDetailView
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('accounts/', AccountsView.as_view()),
    path('accounts/<uuid:pk>/', AccountsDetailView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
]