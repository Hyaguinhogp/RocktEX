from django.urls import path
from rest_framework_simplejwt import views  # new
from .views import AccountsView

urlpatterns = [
    path('token/', views.TokenObtainPairView.as_view()),  # new
    path('token/refresh/', views.TokenRefreshView.as_view()),  # new
    path('accounts/', AccountsView.as_view()),
]