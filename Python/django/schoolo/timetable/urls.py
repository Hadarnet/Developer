from django.urls import path
from . import views

app_name = 'timetable'
urlpatterns = [
    path('', views.TimeTableListViews.as_view(), name='timetable'),
    path('add/', views.TimetableCreateViews.as_view(), name='timetable_create'),

]