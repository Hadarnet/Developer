from django.views.generic import TemplateView
from django.views.generic.list import ListView

from facts.models import Song


class HomeView(TemplateView):
    template_name = "myhome.html"


class SearchView(ListView):
    model = Song
    template_name = 'search.html'
    context_object_name = 'all_search_results'

    def get_queryset(self):
        result = super(SearchView, self).get_queryset()
        query = self.request.GET.get('search')
        if query:
            postresult = Song.objects.filter(title__icontains=query)
            result = postresult
        else:
            result = None
        return result
