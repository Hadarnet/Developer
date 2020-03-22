from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib import messages
from django.views import generic
from django.views.generic import FormView
from .models import TimeTable
from .froms import TimeTableForms
from django.views.generic.list import ListView


class TimeTableListViews(ListView):
    template_name = 'timetable/timetable.html'
    context_object_name = 'timetable'
    paginate_by = 10
    queryset = TimeTable.objects.order_by("school")


class TimetableCreateViews(FormView):
    form_class = TimeTableForms
    success_url = 'timetable'
    template_name = 'timetable/timetable_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)