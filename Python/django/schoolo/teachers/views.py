from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib import messages
from django.views import generic
from django.views.generic import FormView
from .models import Teachers
from .froms import TeachersForms
from django.views.generic.list import ListView


class TeachersListViews(ListView):
    template_name = 'teachers/teachers_list.html'
    context_object_name = 'teachers'
    paginate_by = 10
    queryset = Teachers.objects.order_by("name")


class TeachersCreateViews(FormView):
    form_class = TeachersForms
    success_url = 'teachers'
    template_name = 'teachers/teachers_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)