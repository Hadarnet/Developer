from django.views.generic import FormView
from .models import Schools
from .froms import SchoolsForms
from django.views.generic.list import ListView


class SchoolsListViews(ListView):
    template_name = 'schools/Schools_list.html'
    context_object_name = 'schools'
    paginate_by = 10
    queryset = Schools.objects.order_by("id_school")


class SchoolsCreateViews(FormView):
    form_class = SchoolsForms
    success_url = '/schools/'
    template_name = 'schools/Schools_From.html'

    def form_valid(self, form):
        form.save()
        messages.success(req)
        return super().form_valid(form)

