from django.urls import path
from . import views

app_name = ' assignment'
urlpatterns = [
    path('', views. AssignmentListViews.as_view(), name=' assignment_list'),
    path('add/', views. AssignmentCreateViews.as_view(), name=' assignment_create'),

]