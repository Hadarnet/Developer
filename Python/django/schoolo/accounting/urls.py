from django.urls import path
from . import views

app_name = ' accounting'
urlpatterns = [
    path('', views. AccountingListViews.as_view(), name=' accounting_list'),
    path('add/', views. AccountingCreateViews.as_view(), name=' accounting_create'),

]