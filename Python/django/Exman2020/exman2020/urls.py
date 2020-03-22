from django.contrib import admin
from django.http import HttpRequest, HttpResponse
from django.urls import path, include

urlpatterns = [
    path('expenses/', include("expenses.urls")),
    path('admin/', admin.site.urls),
]
