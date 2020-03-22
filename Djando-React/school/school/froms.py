from django import forms
from .models import School


class SchoolForms(forms.ModelForm):
    class Meta:
        model = School
        fields = ["name"]
