from django import forms
from .models import Visitors


class VisitorsForms(forms.ModelForm):
    class Meta:
        model = Visitors
        fields = ["first_name"]
