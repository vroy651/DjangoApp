from django.urls import path
from .views import NoteBookView, NoteBookDeleteView

urlpatterns = [
    path("notes/", NoteBookView.as_view(), name="notebook"),
    path(
        "notes/delete/<int:pk>/", NoteBookDeleteView.as_view(), name="notebook-delete"
    ),
]
