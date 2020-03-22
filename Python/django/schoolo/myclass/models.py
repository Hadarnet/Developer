from django.db import models
from django.utils import timezone


class MyClass(models.Model):
    id_school=models.DateTimeField()  # סמל בית ספר
    name_school=models.DateTimeField()  # שם בית הספר
    yearStudies=models.DateTimeField()  # שנת לימוד
    grade=models.DateTimeField()  # שכבה
    parallel=models.DateTimeField()  # מקבליה
    classType=models.DateTimeField()  # סוג כיתה
    descripClassType=models.DateTimeField()  # תיאור סוג כיתה
    minStudents=models.DateTimeField()  # מינמום תלמידים
    maxStudents=models.DateTimeField()  # מקסימום תלמידים
    approvalStatus=models.DateTimeField()  # סטוס אישור
    descripApprovalStatus=models.DateTimeField()  # תיאור סטוס אישור
    name_class = models.CharField(max_length=1)   #   כיתה
    number_class = models.TextField(null=True)    #   מספר כיתה
    teacher = models.CharField(max_length=50)    #
    # shnat_limudim = models.DateTimeField()                          #  שנת לימוד
    # semel_mosad = models.IntegerField()                             #  סמל מוסד
    # shichva = models.IntegerField()                                 #   שכבה
    # name_class = models.CharField(max_length=1)                     #   כיתה
    # number_class = models.TextField(null=True)                      #   מספר כיתה
    # makbila = models.IntegerField()                                 #   מקבילה
    # code_sug_kita = models.IntegerField()                           #   סוג כתה
    # teur_sug_kita = models.CharField(max_length=30)                 #   תיאור סוג כיתה
    # min_talmidim = models.IntegerField()                            #   מינימום תלמידים
    # max_talmidim = models.IntegerField()                            #   מקסימום תלמידים
    # status_ishur = models.IntegerField()                            #   סטטוס אישור
    # teur_status_ishur = models.CharField(max_length=50)             #   תיאור סטטוס אישור
    # teacher = models.CharField(max_length=50)
    #


    def __str__(self):
        return f"[#{self.number_class}]. {self.name_class}"

