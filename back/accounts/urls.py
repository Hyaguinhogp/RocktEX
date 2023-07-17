from django.urls import path
from rest_framework_simplejwt import views
from .views import AccountsView
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('token/', views.TokenObtainPairView.as_view()),
    path('token/refresh/', views.TokenRefreshView.as_view()),
    path('accounts/', AccountsView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
]