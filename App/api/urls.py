from django.conf.urls import url
from .views import ColorListView, ColorCreateView

urlpatterns = [
    url(r'^colores_list',
        ColorListView.as_view(),
        name = 'colores_lista'),
    url(r'^create',
        ColorCreateView.as_view(),
        name = 'colores_create'),
]
