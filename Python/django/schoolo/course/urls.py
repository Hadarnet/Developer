from django.urls import path
from . import views

app_name = ' course'
urlpatterns = [
    path('', views. CourseListViews.as_view(), name=' course_list'),
    path('add/', views. CourseCreateViews.as_view(), name=' course_create'),

]