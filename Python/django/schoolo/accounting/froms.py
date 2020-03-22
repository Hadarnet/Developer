from django import forms
from .models import Accounting


class AccountingForms(forms.ModelForm):
    class Meta:
        model = Accounting
        fields = ["name_course"]
