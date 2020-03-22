from django import forms
from .models import MyClass


class MyClassForms(forms.ModelForm):
    class Meta:
        model = MyClass
        fields = ["name_class", "number_class"]
