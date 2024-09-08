from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteBookSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import NoteBook

# Create your views here.


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = UserSerializer


class NoteBookView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NoteBookSerializer

    def get_queryset(self):
        user = self.request.user
        return NoteBook.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class NoteBookDeleteView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NoteBookSerializer

    def get_queryset(self):
        user = self.request.user
        return NoteBook.objects.filter(author=user)
