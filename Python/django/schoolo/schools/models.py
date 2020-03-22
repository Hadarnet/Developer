from django.db import models
from django.utils import timezone
from datetime import datetime
from django.core.validators import MaxValueValidator


class Schools(models.Model):
    years_studies = models.CharField(max_length=4)                                              # שנת לימוד
    id_school = models.PositiveIntegerField(validators=[MaxValueValidator(999999)])             # מספר מזהה מוסד הלימוד
    names_school = models.CharField(max_length=30)                                              # שם מוסד הלימוד
    id_school_network = models.PositiveIntegerField(validators=[MaxValueValidator(9999999)])    # מספר מזהה רשת חינוך
    school_network = models.CharField(max_length=40)                                            # רשת חינוך
    school_typle = models.PositiveIntegerField(validators=[MaxValueValidator(9)])               # מספר מזהה סוג מוסד
    descrip_school_typle = models.CharField(max_length=20)                                      # סוג מוסד
    reporting = models.PositiveIntegerField(validators=[MaxValueValidator(99)])                 # מספר מזהה גורם מדווח
    descrip_reporting = models.CharField(max_length=20)                                         # גורם מדווח
    sector = models.PositiveIntegerField(validators=[MaxValueValidator(9)])                     # מספר מזהה מגזר
    descrip_sector = models.CharField(max_length=10)                                            # מגזר
    legal_status = models.PositiveIntegerField(validators=[MaxValueValidator(9)])               # מספר מזהה סטטוס משפטי
    descrip_legal_Status = models.CharField(max_length=20)                                      # סטטוס משפטי
    inspection_type = models.PositiveIntegerField(validators=[MaxValueValidator(9)])            # מספר מזהה סוג פיקוח
    descrip_inspection_type = models.CharField(max_length=20)                                   # סוג הפיקוח
    type_education = models.PositiveIntegerField(validators=[MaxValueValidator(99)])            # קו מזהה סוג חינוך
    type_education = models.CharField(max_length=5)                                             # סוג החינוך
    education_phase = models.PositiveIntegerField(validators=[MaxValueValidator(9)])            # קוד מזהה שלב חינוך
    descrip_educationPhase = models.CharField(max_length=20)                                    # שלב חינוך
    id_city = models.PositiveIntegerField(validators=[MaxValueValidator(99999)])                # קוד מזהה ישוב
    city = models.CharField(max_length=20)                                                      # ישוב
    address_school = models.CharField(max_length=40)                                            # כתובת
    phone = models.CharField(max_length=11)                                                     # טלפון
    email = models.CharField(max_length=30)                                                     # דואר אלקטרוני
    fax = models.CharField(max_length=11)                                                       # פקס
    facebook = models.CharField(max_length=50)                                                  # פיסבוק
    instagram = models.CharField(max_length=50)                                                 # אינסטגרם

    class Meta:
    
        verbose_name = 'מוסד לימוד'
        verbose_name_plural = 'מוסדות לימוד'

    def __str__(self):
        return f"{self.pk}. שם המוסד :  {self.names_school} כתובת: עיר: {self.city} רחוב: {self.address_school} טלפון: {self.phone} דואר אלקטרוני: {self.email}"


