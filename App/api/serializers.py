from rest_framework import serializers
from ..models import Colores

class ColoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colores
        fields = '__all__'
