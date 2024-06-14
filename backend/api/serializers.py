from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Character

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ["id", "character_id", "created_at", "author", "char_name", "char_description", "char_url"]
        extra_kwargs = {"author": {"read_only": True}}
        