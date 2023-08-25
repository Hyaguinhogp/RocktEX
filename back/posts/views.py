from rest_framework.generics import ListCreateAPIView
from .models import Post
from .serializer import PostSerializer

class PostView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

