from django.urls import path
from . import views

app_name = 'students'
urlpatterns = [
    path('', views.StudentsListViews.as_view(), name='students_list'),
    path('add/', views.StudentsCreateViews.as_view(), name='students_create'),

]