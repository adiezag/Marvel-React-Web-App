from django.db import models
from django.contrib.auth.models import User

class Character(models.Model):
    character_id = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    author = models.ForeignKey(User, on_delete = models.CASCADE, related_name="characters") #one to many relation
    # new fields
    char_name = models.CharField(max_length=1000)
    char_description = models.CharField(max_length=1000, blank=True)
    char_url = models.CharField(max_length=1000, blank=True)

    def __str__(self):
        return self.character_id

# Create your models here.
