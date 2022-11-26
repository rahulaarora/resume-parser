from django.urls import include, path

from rest_framework import routers

from parser_app.views import ResumeViewSet

from . import views
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'resume', ResumeViewSet)

urlpatterns = [
   path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns = [
#     path('', views.homepage, name='homepage'),
# ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
