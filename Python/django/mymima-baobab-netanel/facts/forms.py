from django import forms

from . import models


class FactForm(forms.ModelForm):
    class Meta:
        model = models.Fact
        fields = '__all__'

