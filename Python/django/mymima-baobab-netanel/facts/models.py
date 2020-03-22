from django.db import models
from django.utils import timezone


class Artist(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'אמן'
        verbose_name_plural = 'אמנים'

    def __str__(self):
        return f"{self.name}"


class Song(models.Model):
    artist = models.ForeignKey(Artist, related_name='artist', null=False, on_delete=models.PROTECT)
    title = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'שיר'
        verbose_name_plural = 'שירים'

    def __str__(self):
        return f" אמן:{self.artist} שיר: {self.title}"


class Fact(models.Model):
    song = models.ForeignKey(Song, related_name='facts', null=False, on_delete=models.PROTECT)
    content = models.TextField()
    author = models.CharField(max_length=30)
    date = models.DateField(auto_now=True)

    class Meta:
        verbose_name = 'עובדה'
        verbose_name_plural = 'עובדות'

    def __str__(self):
        return f"{self.content}\n ע''י {self.author }"
