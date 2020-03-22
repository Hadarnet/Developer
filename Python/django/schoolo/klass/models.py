from django.db import models
from django.utils import timezone


class Klass(models.Model):
    id_school = models.DateTimeField()  # סמל בית ספר
    name_school = models.DateTimeField()  # שם בית הספר
    yearStudies = models.DateTimeField()  # שנת לימוד
    grade = models.DateTimeField()  # שכבה
    parallel = models.DateTimeField()  # מקבליה
    id_class_type = models.DateTimeField()  # סוג כיתה
    Class_type = models.DateTimeField()  # תיאור סוג כיתה
    min_students = models.DateTimeField()  # מינמום תלמידים
    maxStudents = models.DateTimeField()  # מקסימום תלמידים
    id_approval_status = models.DateTimeField()  # סטוס אישור
    approval_status = models.DateTimeField()  # תיאור סטוס אישור
    name_class = models.CharField(max_length=1)   #   כיתה
    number_class = models.TextField(null=True)    #   מספר כיתה
    teacher = models.CharField(max_length=50)    #

    class Meta:
        verbose_name = 'כיתות'
        verbose_name_plural = 'כיתות'

    def __str__(self):
        return f"[#{self.number_class}]. {self.name_class}"

