from django.views.generic import FormView
from .models import klass
from .froms import klassForms
from django.views.generic.list import ListView


class KlassListViews(ListView):
    template_name = 'klass/klass_list.html'
    context_object_name = 'klass'
    paginate_by = 10
    queryset = Klass.objects.order_by("-added_at")


class KlassCreateViews(FormView):
    form_class = KlassForms
    success_url = '/klass/'
    template_name = 'klass/klass_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

