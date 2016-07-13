from django.conf.urls import url
from .views import ColorListView

urlpatterns = [
    url(r'^colores_list',
        ColorListView.as_view(),
        name = 'colores_lista'),
]
