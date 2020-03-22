from django.contrib import admin
from .models import School, Teacher, Student, Klas, Course, Cal, Gallery, Book

admin.site.register(School)
admin.site.register(Klas)
admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(Course)
admin.site.register(Book)
admin.site.register(Cal)
admin.site.register(Gallery)
