from django.contrib import admin
from .models import Colores

@admin.register(Colores)

class adminColores(admin.ModelAdmin):
    list_display = ('name', 'hexadecimal')
    list_filter = ('name', 'hexadecimal')
