from django.db import models
import uuid
from accounts.models import Account

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=20)
    post_date = models.DateTimeField(auto_now_add=True)
    complete_post = models.TextField()
    author = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='posts')
    views = models.IntegerField(default=0)