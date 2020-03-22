from django.views.generic import FormView
from .models import Assignment
from .froms import AssignmentForms
from django.views.generic.list import ListView


class AssignmentListViews(ListView):
    template_name = ' assignment/assignment_list.html'
    context_object_name = ' assignment'
    paginate_by = 10
    queryset = Assignment.objects.order_by("name_course")


class AssignmentCreateViews(FormView):
    form_class = Assignment
    success_url = '/assignment/'
    template_name = 'assignment/assignment_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

