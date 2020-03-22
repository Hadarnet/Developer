from django.urls import path
from . import views

app_name = 'klass'
urlpatterns = [
    path('', views.KlassListViews.as_view(), name='klass_list'),
    path('add/', views.KlassCreateViews.as_view(), name='klass_create'),

]