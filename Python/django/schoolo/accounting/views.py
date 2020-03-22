from django.views.generic import FormView
from .models import Accounting
from .froms import AccountingForms
from django.views.generic.list import ListView


class AccountingListViews(ListView):
    template_name = ' accounting/accounting_list.html'
    context_object_name = ' accounting'
    paginate_by = 10
    queryset = Accounting.objects.order_by("name_course")


class AccountingCreateViews(FormView):
    form_class = Accounting
    success_url = '/accounting/'
    template_name = 'accounting/accounting_from.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

