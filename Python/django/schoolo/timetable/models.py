from django.db import models
from django.utils import timezone


class TimeTable(models.Model):
    school = models.CharField(max_length=30)

    class Meta:
        verbose_name = 'מערכת שעות ואירועים'
        verbose_name_plural = 'מערכת שעות ואירועים'
