from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib import messages
from django.views import generic
from django.views.generic import FormView
from .models import Students
from .froms import StudentsForms
from django.views.generic.list import ListView


class StudentsListViews(ListView):
    template_name = 'students/Students_List.html'
    context_object_name = 'students'
    paginate_by = 10
    queryset = Students.objects.order_by("frist_name")


class StudentsCreateViews(FormView):
    form_class = StudentsForms
    success_url = '/students/'
    template_name = 'students/Students_From.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

# def note_create(request):
#    if request.method == "POST":
#         form = NoteForms(request.POST)
#         if form.is_valid():
#             form.save()
#             messages.success(request,"New Note")
#             return redirect('/schools/')
#
#    form = NoteForms()
#    return render(request,"schools/Schools_From.html", {"form":form})
#
#
#
# def note_list(request):
#     notes = Note.objects.order_by('-added_at')
#     context = dict(notes=notes)
#     return render(request, 'schools/note_list.html', context)
