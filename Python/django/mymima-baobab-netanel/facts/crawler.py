from pprint import pprint
from bs4 import BeautifulSoup
import requests
from django.utils import timezone
from .models import Fact, Song, Artist


def get_all_data():
    Fact.objects.all().delete()
    Song.objects.all().delete()
    Artist.objects.all().delete()
    for num_page in range(1, 1451):
        base = 'https://www.mima.co.il/fact_page.php?song_id='
        url = base + f'{num_page}'
        page = requests.get(url)
        page.raise_for_status()
        soup = BeautifulSoup(page.text, 'html.parser')
        # Find Artist & Song title
        scrape_artist = soup.find_all('font', {'size': ['+5', '+2']})
        artist_name = scrape_artist[1].text
        artist, created = Artist.objects.get_or_create(name=artist_name)
        song_name = scrape_artist[0].text
        song, created = Song.objects.get_or_create(artist=artist, title=song_name)
        scrape_songs = soup.find_all('tr', {'bgcolor': ['#CCFFCC', '#EDF3FE']})
        for ind in range(len(scrape_songs)):
            scraped_content = scrape_songs[ind].text.strip().split('נכתב ע"י')
            fact = scraped_content[0].replace('\r\n', '')
            try:
                author = scraped_content[1]
            except IndexError:
                author = 'אנונימי'
            Fact.objects.create(song=song, content=fact, author=author)

        print(artist_name)
