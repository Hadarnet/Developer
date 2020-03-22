from django.db import models
from django.utils import timezone


class Teachers(models.Model):
    school = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    photo = models.CharField(max_length=30)
    facebook = models.CharField(max_length=30)
    instagram = models.CharField(max_length=150,)
    gender = models.CharField(max_length=30)
    blood_group = models.CharField(max_length=30)
    birth_date = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    zehut_Mispar = models.DateTimeField(auto_now=True)
    Sug_zehut = models.DateTimeField(auto_now=True)
    Code_Tafkid_bamosad = models.DateTimeField(auto_now=True)
    Teur_Tafkid_bamosad = models.TextField()
    Tafkid_taarich_hatchala = models.CharField(max_length=150)
    Tafkid_taarich_siyum = models.CharField(max_length=150)
    shichva = models.CharField(max_length=150)
    makbila = models.CharField(max_length=150)

    class Meta:
        verbose_name = 'מורה'
        verbose_name_plural = 'מורים'

    def __str__(self):
        return  f"[#{self.pk}]. {self.first_name}, by {self.shichva}"
