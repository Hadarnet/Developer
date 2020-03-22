from django.contrib import admin
from .models import Students


class FactAdmin(admin.ModelAdmin):
    date_hierarchy = 'frist_name',
    search_fields = (
        'frist_name',
    )
    list_display = (
        'frist_name',
    )
    list_filter = (
        'frist_name',
    )


admin.site.site_header = "סוקולו מערכת לניהול לימודים"

admin.site.register(Students)
