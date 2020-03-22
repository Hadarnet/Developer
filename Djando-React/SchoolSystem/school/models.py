from django.db import models
from django.core.validators import MaxValueValidator


CATEGORY_CHOICES=(
    ('1', 'נקבה'),
    ('2', 'זכר'),
)


class School(models.Model):
    years_studies = models.PositiveIntegerField(validators=[MaxValueValidator(2099)])
    id_school = models.PositiveIntegerField(validators=[MaxValueValidator(999999)])
    name = models.CharField(max_length=30)
    school_type = models.CharField(max_length=20)
    type_education = models.CharField(max_length=5)
    education_phase = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    address_school = models.CharField(max_length=40)
    phone = models.CharField(max_length=11)
    email = models.CharField(max_length=30)
    fax = models.CharField(max_length=11)
    facebook = models.CharField(max_length=50)
    instagram = models.CharField(max_length=50)
    image = models.ImageField(upload_to='uploads/')

    class Meta:
        verbose_name='מוסד לימוד'
        verbose_name_plural='מוסדות לימוד'

    def __str__(self):
        return f"{self.pk}. שם המוסד :  {self.name} כתובת: עיר: {self.city} רחוב: {self.address_school} טלפון: {self.phone} דואר אלקטרוני: {self.email}"


class Klas(models.Model):
    name_class=models.CharField(max_length=1)  # כיתה
    number_class=models.PositiveIntegerField(validators=[MaxValueValidator(10)])
    min_students=models.PositiveIntegerField(validators=[MaxValueValidator(99)])
    max_students=models.PositiveIntegerField(validators=[MaxValueValidator(99)])

    class Meta:
        verbose_name='כיתה'
        verbose_name_plural='כיתות'

    def __str__(self):
        return f"[#{self.number_class}]. {self.name_class}"


class Student(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name="school")
    id_number=models.PositiveIntegerField(validators=[MaxValueValidator(999999)])
    first_name=models.CharField(max_length=20)
    last_name=models.CharField(max_length=24)
    date_of_birth=models.DateField()
    gender=models.CharField(max_length=200, choices=CATEGORY_CHOICES)
    registration_start_date=models.DateField()
    registration_end_date=models.DateField()
    country_birth=models.CharField(max_length=20)
    image=models.ImageField(upload_to='students/')

    class Meta:
        verbose_name='תלמיד'
        verbose_name_plural='תלמידים'

    def __str__(self):
        return f"{self.pk}. שם התלמיד :  {self.first_name} {self.last_name}"


class Teacher(models.Model):
    id_number=models.DateTimeField(auto_now=True)
    first_name=models.CharField(max_length=30)
    last_name=models.CharField(max_length=30)
    phone=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    photo=models.CharField(max_length=30)
    facebook=models.CharField(max_length=30)
    instagram=models.CharField(max_length=150, )
    gender=models.CharField(max_length=200, choices=CATEGORY_CHOICES)
    birth_date=models.CharField(max_length=30)
    address=models.CharField(max_length=30)
    klass=models.PositiveIntegerField(validators=[MaxValueValidator(99)])
    image=models.ImageField(upload_to='teachers/')

    class Meta:
        verbose_name='מורה'
        verbose_name_plural='מורים'

    def __str__(self):
        return f"[#{self.pk}]. {self.first_name}"


class Course(models.Model):
    title=models.CharField(max_length=30)
    course=models.CharField(max_length=30)

    class Meta:
        verbose_name='קורס'
        verbose_name_plural='קורסים'

    def __str__(self):
        return f"{self.pk}. שם התלמיד :  {self.title} {self.course}"


class Book(models.Model):
    title=models.CharField(max_length=30)
    course=models.CharField(max_length=30)
    file=models.FileField(upload_to='uploads/book')
    text=models.TextField()

    class Meta:
        verbose_name='ספרים ווידיאו'
        verbose_name_plural='ספרים ווידיאו'

    def __str__(self):
        return f"{self.pk}. שם התלמיד :  {self.course} {self.title}"


class Cal(models.Model):
    EVENT_CHOICES=(
        ('שיעור', 'שיעור'),
        ('ז', 'חופשה'),
        ('ז', 'שביתה'),
        ('ז', 'פעילות'),
        ('ז', 'טיול'),
        ('ז', 'חשוב'),

    )
    title = models.CharField(max_length=255),
    event_class = models.CharField(max_length=20, choices=EVENT_CHOICES, blank=True),
    start = models.DateTimeField(verbose_name=('Start Date')),
    start = models.DateTimeField(verbose_name=('End Date')),

    class Meta:
        verbose_name='מערכת שעות'
        verbose_name_plural='מערכת שעות'

    def __str__(self):
        return f"{self.pk}. {self.title} {self.event_class}"


class Gallery(models.Model):
    title = models.CharField(max_length=30)
    school = models.CharField(max_length=30)
    image = models.ImageField(upload_to ='uploads/gallery')

    class Meta:
        verbose_name = 'גלריה'
        verbose_name_plural = 'גלריה'

    def __str__(self):
        return f"{self.title} {self.school} "

