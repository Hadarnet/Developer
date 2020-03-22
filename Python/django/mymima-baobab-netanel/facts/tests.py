from django.test import TestCase
from .models import Artist, Song, Fact


class ArtistModelTests(TestCase):
    def test_models(self):
        artist1 = Artist(name="James")
        artist1.save()
        artist2 = Artist(name="netanel")
        artist2.save()
        artist3 = Artist(name="Beyonce")
        artist3.save()
        self.assertEqual(len(Artist.objects.all()) == 3, True)


class SongModelTests(TestCase):
    def test_models(self):
        artist1 = Artist(name="James")
        artist1.save()
        song1 = Song(title="impossible", artist=artist1)
        song1.save()
        artist2 = Artist(name="netanel")
        artist2.save()
        song2 = Song(title="dadada", artist=artist2)
        song2.save()
        artist3 = Artist(name="Beyonce")
        artist3.save()
        song3 = Song(title="love on top", artist=artist3)
        song3.save()
        self.assertEqual(len(Song.objects.all()) == 3, True)


class FactModelTests(TestCase):
    def test_models(self):
        artist1 = Artist(name="James")
        artist1.save()
        song1 = Song(title="impossible", artist=artist1)
        song1.save()
        fact1 = Fact(song=song1, author="aa", content="vjfdvnsfdkvnfsdkvsd")
        fact1.save()
        artist2 = Artist(name="netanel")
        artist2.save()
        song2 = Song(title="dadada", artist=artist2)
        song2.save()
        fact2 = Fact(song=song2, author="bb", content="ervgrfe")
        fact2.save()
        artist3 = Artist(name="Beyonce")
        artist3.save()
        song3 = Song(title="love on top", artist=artist3)
        song3.save()
        fact3 = Fact(song=song3, author="cc", content="ervgrhbgtrhbrtfe")
        fact3.save()
        self.assertEqual(len(Fact.objects.all()) == 3, True)