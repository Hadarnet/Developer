from django.urls import path
from . import views

app_name = 'facts'
urlpatterns = [
    path('artist', views.ArtistListViews.as_view(), name='artist_list'),
    path('song', views.SongListViews.as_view(), name='song_list'),
    path('', views.FactListViews.as_view(), name='fact_list'),
    path('artist/<int:pk>', views.ArtistDetailView.as_view(), name='artist_detail'),
    path('song/<int:pk>', views.SongDetailView.as_view(), name='song_detail'),
    path('<int:pk>', views.FactDetailView.as_view(), name='fact_detail'),
    path('create', views.fact_create, name="create"),

]