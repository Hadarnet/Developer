from django.contrib import admin
from .models import Schools

# class SchoolAdmin(admin.ModelAdmin):
#     date_hierarchy = 'date'


admin.site.register(Schools)


    