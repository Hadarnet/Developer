from pprint import pprint
from pymongo import MongoClient
import feedparser

client = MongoClient("mongodb+srv://netanel:A053730730a@cluster0-0iv5k.mongodb.net/test")
db = client.get_database("my_new")
news = db.get_collection("news")

rss = feedparser.parse("http://www.ynet.co.il/Integration/StoryRss2.xml")
pprint(rss.entries)


URLS = ['https://www.ynet.co.il/'
'https://www.walla.co.il/'
]


