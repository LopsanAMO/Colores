from django.conf.urls import url, include
from django.contrib import admin
from App.api import urls as urlsAPI

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^API/', include(urlsAPI, namespace='API'))
]
