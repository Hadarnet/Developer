from django import forms
from .models import Klass


class KlassForms(forms.ModelForm):
    class Meta:
        model = Klass
        fields = ["name_class", "number_class"]
