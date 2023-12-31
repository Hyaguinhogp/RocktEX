from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid

class Account(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    biography = models.CharField(max_length=300, blank=True)
    url_image = models.CharField(max_length=500, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.username} {self.email}'
