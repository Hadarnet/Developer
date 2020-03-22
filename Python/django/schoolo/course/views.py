from django.views.generic import FormView
from .models import Course
from .froms import CourseForms
from django.views.generic.list import ListView


class CourseListViews(ListView):
    template_name = ' course/course_list.html'
    context_object_name = ' course'
    paginate_by = 10
    queryset = Course.objects.order_by("name_course")


class CourseCreateViews(FormView):
    form_class = Course
    success_url = '/course/'
    template_name = 'course/course_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

