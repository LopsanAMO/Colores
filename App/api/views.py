from rest_framework import generics
from .serializers import ColoresSerializer
from ..models import Colores

class ColorListView(generics.ListAPIView):
    queryset = Colores.objects.all()
    serializer_class = ColoresSerializer
