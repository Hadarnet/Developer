from django import forms
from .models import Schools


class SchoolsForms(forms.ModelForm):
    class Meta:
        model = Schools
        fields = ["id_school"]
