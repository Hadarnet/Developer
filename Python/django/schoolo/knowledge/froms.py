from django import forms
from .models import Knowledge


class KnowledgeForms(forms.ModelForm):
    class Meta:
        model = Knowledge
        fields = ["name_book"]
