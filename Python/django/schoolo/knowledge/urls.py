from django.urls import path
from . import views

app_name = 'knowledge'
urlpatterns = [
    path('', views.KnowledgeListViews.as_view(), name='knowledge_list'),
    path('add/', views.KnowledgeCreateViews.as_view(), name='knowledge_create'),

]