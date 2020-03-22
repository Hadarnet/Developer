from django import forms
from .models import Assignment


class AssignmentForms(forms.ModelForm):
    class Meta:
        model = Assignment
        fields = ["name_course"]
