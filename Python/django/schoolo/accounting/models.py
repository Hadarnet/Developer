from django.db import models


class Accounting(models.Model):
    name_course = models.DateTimeField()  # סמל בית ספר
    name_school = models.DateTimeField()  # שם בית הספר

    class Meta:
        verbose_name = 'הנה"ח'
        verbose_name_plural = 'הנה"ח'

    def __str__(self):
        return f"[#{self.pk}]. {self.name_course}"

# Create your models here.
