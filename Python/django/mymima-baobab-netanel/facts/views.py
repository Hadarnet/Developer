from pyexpat.errors import messages
from django.forms import forms
from django.shortcuts import render, redirect
from django.views.generic import DetailView
from .models import Artist, Song, Fact
from django.views.generic.list import ListView
from .forms import FactForm
from django.contrib.auth.models import User
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


class ArtistListViews(ListView):
    template_name = 'facts/artist_list.html'
    context_object_name = 'artist'
    paginate_by = 20
    queryset = Artist.objects.order_by("name")


class SongListViews(ListView):
    template_name = 'facts/song_list.html'
    context_object_name = 'song'
    paginate_by = 20
    queryset = Song.objects.order_by("title")


class FactListViews(ListView):
    template_name = 'facts/fact_list.html'
    context_object_name = 'facts'
    paginate_by = 13
    queryset = Fact.objects.order_by("-date")


class ArtistDetailView(DetailView):
    template_name = 'facts/artist_detail.html'
    model = Artist


class SongDetailView(DetailView):
    template_name = 'facts/song_detail.html'
    model = Song

    def get_context_data(self, **kwargs):
        d = super().get_context_data(**kwargs)
        d['facts'] = Fact.objects.filter(song=self.get_object())
        d['artists'] = Artist.objects.all()[:5]
        return d


class FactDetailView(DetailView):
    template_name = 'facts/fact_detail.html'
    model = Fact


def fact_create(request):
    if request.method == "POST":
        form = FactForm(request.POST)
        if form.is_valid():
            # data = form.cleaned_data
            o = form.save()
            messages.success(request, f"Expense #{o.id} added. Thank you so very much!!!!!")
            # return redirect(o)  # TODO: implement get_absolute_url
            return redirect("facts:song_list")

    else:
        form = FactForm()
    return render(request, "facts/fact_form.html", {
        'form': form,
    })

