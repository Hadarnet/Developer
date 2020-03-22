from django.urls import path
from . import views

app_name = 'myclass'
urlpatterns = [
    path('', views.MyClassListViews.as_view(), name='myclass_list'),
    path('add/', views.MyClassCreateViews.as_view(), name='myclass_create'),

]