from django.db import models
from django.utils import timezone


class Knowledge(models.Model):
    name_book = models.DateTimeField()  # סמל בית ספר
    name_school = models.DateTimeField()  # שם בית הספר

    class Meta:
        verbose_name = 'מערכת ספרים ווידיאו'
        verbose_name_plural = 'מערכת ספרים ווידיאו'

    def __str__(self):
        return f"[#{self.pk}]. {self.name_book}"

