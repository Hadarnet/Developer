from django.urls import path
from django.views.generic import TemplateView

from home.views import SearchView

app_name = 'home'

urlpatterns = [
    path('', TemplateView.as_view(template_name="home/myhome.html")),
    path('search/', SearchView.as_view(template_name="home/search.html"), name='search'),

]
