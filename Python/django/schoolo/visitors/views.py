from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib import messages
from django.views import generic
from django.views.generic import FormView
from .models import Visitors
from .froms import VisitorsForms
from django.views.generic.list import ListView


class VisitorsListViews(ListView):
    template_name = 'visitors/visitors_list.html'
    context_object_name = 'visitors'
    paginate_by = 10
    queryset = Visitors.objects.order_by("name")


class VisitorsCreateViews(FormView):
    form_class = VisitorsForms
    success_url = 'visitors'
    template_name = 'visitors/visitors_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)