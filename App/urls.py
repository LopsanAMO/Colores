from django.conf.urls import url
from .views import Home

urlpatterns = [
    url(r'^holis', Home.as_view()),
]
