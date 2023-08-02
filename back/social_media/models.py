from django.db import models
import uuid
from accounts.models import Account

class SocialMedia(models.Model):
    SOCIAL_MEDIA_CHOICES = (
        ('twitter', 'Twitter'),
        ('instagram', 'Instagram'),
        ('linkedin', 'Linkedin'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='social_media')
    social_media_type = models.CharField(max_length=20, choices=SOCIAL_MEDIA_CHOICES)
    social_media_handle = models.CharField(max_length=100)