from django.urls import path
from . import views

app_name = 'teachers'
urlpatterns = [
    path('', views.TeachersListViews.as_view(), name='teachers_list'),
    path('add/', views.TeachersCreateViews.as_view(), name='teachers_create'),

]