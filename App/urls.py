from django.conf.urls import url
from .views import Home,Mandar

urlpatterns = [
    url(r'^holis', Home.as_view()),
    url(r'^manda', Mandar.as_view()),
]
