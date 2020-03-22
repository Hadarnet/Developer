from django.views.generic import FormView
from .models import MyClass
from .froms import MyClassForms
from django.views.generic.list import ListView


class MyClassListViews(ListView):
    template_name = 'myclass/myclass_list.html'
    context_object_name = 'myclass'
    paginate_by = 10
    queryset = MyClass.objects.order_by("-added_at")


class MyClassCreateViews(FormView):
    form_class = MyClassForms
    success_url = '/myclass/'
    template_name = 'myclass/myclass_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

