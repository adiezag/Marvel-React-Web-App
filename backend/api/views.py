from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, CharacterSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Character

class CharacterListCreate(generics.ListCreateAPIView):
    serializer_class = CharacterSerializer
    permission_classes = [IsAuthenticated] # You cannot call this route unless it is authenticated and you pass a valid JWT token

    def get_queryset(self):
        user = self.request.user
        return Character.objects.filter(author = user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author = self.request.user)
        else:
            print(serializer.errors)

class CharacterDelete(generics.DestroyAPIView):
    serializer_class = CharacterSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Character.objects.filter(author = user)
# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
