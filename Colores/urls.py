from django.conf.urls import url, include
from django.contrib import admin
from App.api import urls as urlsAPI
from App import urls as ur

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^API/', include(urlsAPI, namespace='API')),
    url(r'^App/', include(ur, namespace='app'))
]
