from django.db import models
from django.utils import timezone


class Course(models.Model):
    name_course = models.DateTimeField()  # סמל בית ספר
    name_school = models.DateTimeField()  # שם בית הספר

    class Meta:
        verbose_name = 'מקצוע'
        verbose_name_plural = 'מקצעות'

    def __str__(self):
        return f"[#{self.pk}]. {self.name_course}"

