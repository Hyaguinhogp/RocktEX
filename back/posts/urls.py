from django.urls import path
from .views import PostLatestView, PostViewsView, PostCreateView, PostDetailView, PostSearchView

urlpatterns = [
    path('posts/', PostLatestView.as_view()),
    path('posts/views/', PostViewsView.as_view()),
    path('posts/create/', PostCreateView.as_view()),
    path('posts/<uuid:pk>/', PostDetailView.as_view()),
    path('posts/search/', PostSearchView.as_view()),
]