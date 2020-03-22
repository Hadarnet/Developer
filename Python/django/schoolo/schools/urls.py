from django.urls import path
from . import views

app_name = 'schools'
urlpatterns = [
    path('', views.SchoolsListViews.as_view(), name='schools_list'),
    path('add/', views.SchoolsCreateViews.as_view(), name='schools_create'),

]