from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView, Request, Response
from .models import Post
from .serializer import PostSerializer
from django.shortcuts import get_object_or_404

class PostView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

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
    
    def update(self, request, *args, **kwargs):
        print(request.data)
        return super().update(request, *args, **kwargs)

