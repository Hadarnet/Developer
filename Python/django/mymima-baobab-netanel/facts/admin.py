from django.contrib import admin
from .models import Song, Artist, Fact


class FactAdmin(admin.ModelAdmin):
    date_hierarchy = 'date'
    search_fields = (
        'song',
        'author',
        'content',
    )
    list_display = (
        'song',
        'author',
        'content',
    )
    list_filter = (
        'date',
    )


class SongAdmin(admin.ModelAdmin):


    search_fields = (
        'artist',
        'title',
    )
    list_display = (
        'artist',
        'title',
    )
    list_filter = (
        'artist',
    )


class ArtistAdmin(admin.ModelAdmin):
    search_fields = (
        'name',
    )
    list_display = (
        'name',
    )
    list_filter = (
        'name',
    )


admin.site.site_header = "מוש השור שירים"
admin.site.register(Fact, FactAdmin)
admin.site.register(Song, SongAdmin)
admin.site.register(Artist, ArtistAdmin)




