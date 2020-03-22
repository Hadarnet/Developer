from django import forms
from .models import Students


class StudentsForms(forms.ModelForm):
    class Meta:
        model = Students
        fields = ["first_name", "messages_student"]
