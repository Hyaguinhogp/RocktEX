from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.views import APIView, Request, Response
from rest_framework_simplejwt.authentication import JWTAuthentication
import jwt
from _core.settings import SECRET_KEY
from .models import Post
from .serializer import PostSerializer
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict
from accounts.models import Account
from django.db.models import Count

class PostLatestView(ListAPIView):
    queryset = Post.objects.order_by('-post_date')
    serializer_class = PostSerializer

class PostViewsView(ListAPIView):
    queryset = Post.objects.all().order_by('-views')
    serializer_class = PostSerializer
    
class PostCreateView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = [JWTAuthentication]

    def post(self, request, *args, **kwargs):
        serializer = PostSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        token = request.auth.token
        decoded_data = jwt.decode(token, key=SECRET_KEY, algorithms='HS256')

        author = Account.objects.get(pk=decoded_data['user_id'])
        post = Post(author=author, **serializer.data)
        post.save()

        return Response(model_to_dict(post), status=status.HTTP_201_CREATED)

class PostDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, request:Request, pk, *args, **kwargs):

        if(request.GET.get('complete') == 'true'):
            instance = get_object_or_404(Post.objects.filter(pk=pk))
            views = instance.views + 1
            data = {'views': views}
            serializer = PostSerializer(instance, data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            
        return super().get(request, *args, **kwargs)

