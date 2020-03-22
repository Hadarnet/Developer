from django import forms
from .models import Teachers


class TeachersForms(forms.ModelForm):
    class Meta:
        model = Teachers
        fields = ["first_name"]
