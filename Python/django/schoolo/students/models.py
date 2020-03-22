from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator


def user_directory_path(instance, filename):
   return 'media/%s/%s' % (instance.first_name, filename)


class Gender(models.Model):
    GENDER_CHOICES = (
        ('ז', 'זכר'),
        ('נ', 'נקבה'),
    )

    


class Students(models.Model):
    # years_studies = models.ForeignKey(Schools, related_name='years_studies', null=False, on_delete=models.PROTECT)                                            # שנת לימוד
    # id_school = models.ForeignKey(Schools, related_name='id_school', null=False, on_delete=models.PROTECT)           # מספר מזהה מוסד הלימוד
    # names_school = models.ForeignKey(Schools, related_name='names_school', null=False, on_delete=models.PROTECT)                                             # שם מוסד הלימוד
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    gender = models.CharField(max_length=1, choices=Gender.GENDER_CHOICES)
    date_of_birth = models.DateField()
    id_number = models.DateTimeField(auto_now=True)
    messages_student = models.TextField()
    address = models.CharField(max_length=150, default="Not Set")
    is_studying = models.BooleanField(default=True)
    # current_class = models.ForeignKey(Course, on_delete=models.CASCADE)
    image = models.ImageField(upload_to = user_directory_path)
    sector=models.PositiveIntegerField(validators=[MaxValueValidator(9)])                     # מספר מזהה מגזר
    descrip_sector=models.CharField(max_length=10)                                            # מגזר
    id_city=models.PositiveIntegerField(validators=[MaxValueValidator(99999)])                # קוד מזהה ישוב
    city=models.CharField(max_length=20)                                                      # ישוב
    address_school=models.CharField(max_length=40)                                            # כתובת
    phone=models.CharField(max_length=11)                                                     # טלפון
    email=models.CharField(max_length=30)                                                     # דואר אלקטרוני
    fax=models.CharField(max_length=11)                                                       # פקס
    facebook=models.CharField(max_length=50)                                                  # פיסבוק
    instagram=models.CharField(max_length=50)                                                 # אינסטגרם


    class Meta:
        verbose_name = 'תלמיד'
        verbose_name_plural = 'תלמידים'

    def __str__(self):
        return  f"[#{self.pk}. {self.first_name} {self.last_name}"

    
