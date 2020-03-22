from django.urls import path
from . import views

app_name = 'visitors'
urlpatterns = [
    path('', views.VisitorsListViews.as_view(), name='visitors_list'),
    path('add/', views.VisitorsCreateViews.as_view(), name='visitors_create'),

]