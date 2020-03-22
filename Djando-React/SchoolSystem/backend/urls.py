from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.shortcuts import render
from django.views.generic import TemplateView

urlpatterns=[
                path('admins/', admin.site.urls),
                path('', include('school.urls')),

            ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
