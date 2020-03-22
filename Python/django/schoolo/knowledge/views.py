from django.views.generic import FormView
from .models import Knowledge
from .froms import KnowledgeForms
from django.views.generic.list import ListView


class KnowledgeListViews(ListView):
    template_name = 'knowledge/knowledge_list.html'
    context_object_name = 'knowledge'
    paginate_by = 10
    queryset = Knowledge.objects.order_by("name_book")


class KnowledgeCreateViews(FormView):
    form_class = Knowledge
    success_url = '/knowledge/'
    template_name = 'knowledge/knowledge_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

