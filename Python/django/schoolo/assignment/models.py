from django.db import models


class Assignment(models.Model):
    name_course = models.DateTimeField()  # סמל בית ספר
    name_school = models.DateTimeField()  # שם בית הספר

    class Meta:
        verbose_name = 'מטלה'
        verbose_name_plural = 'מטלות'

    def __str__(self):
        return f"[#{self.pk}]. {self.name_course}"




