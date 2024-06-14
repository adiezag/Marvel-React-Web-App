from django.urls import path
from . import views

urlpatterns = [
    path("characters/", views.CharacterListCreate.as_view(), name = "character-list"),
    path("characters/delete/<int:pk>", views.CharacterDelete.as_view(), name = "delete-character")
]