from django.db import models
from django.utils import timezone


class Visitors(models.Model):
    school = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    to_meet_user_type = models.DateTimeField(auto_now=True)
    to_meet_user = models.DateTimeField(auto_now=True)
    reason = models.TextField()
    note = models.CharField(max_length=150, default="Not Set")

    class Meta:
        verbose_name = 'מבקר'
        verbose_name_plural = 'מבקרים'
