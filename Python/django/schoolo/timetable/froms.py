from django import forms
from .models import TimeTable


class TimeTableForms(forms.ModelForm):
    class Meta:
        model = TimeTable
        fields = ["school"]
