# YOUR BOT LOGIC/STORAGE/BACKEND FUNCTIONS HERE

# from pymongo import MongoClient
# from pymongo.collection import Collection
#
#
# def get_mongo_storage(dbname):
#     client = MongoClient()
#     db = client.get_database(dbname)
#     coll = db.get_collection("chats")
#     return coll
#
# def add_item(chats, chat_id, name):
#     # {chat_id: 7213125, items: ['milk', 'coffee', 'banana']}
#     chats.update_one({'chat_id': chat_id}, {
#         "$push": {'items': name}
#     }, upsert=True)
#
#
# def list_items(coll: Collection, chat_id):
#     d = coll.find_one({'chat_id': chat_id})
#     return d['items']
import json
import time
import datetime
import pytz
import requests

import secrets
from bot import logger

def to_il_from_string(s):

    dt=datetime.datetime.strptime(s, '%Y-%m-%dT%H:%M:%S.000Z')
    dtUTC=pytz.utc.localize(dt)
    il = pytz.timezone('Asia/Jerusalem')
    dtil=dtUTC.astimezone(il)
    return dtil.strftime('%d/%m/%Y %H:%M')




def getflight(fly_to=None):
    url = 'https://kiwicom-prod.apigee.net/v2/search'
    start=datetime.date.today()
    end = start+datetime.timedelta(days=7)
    params = {'fly_from': 'TLV', 'dateFrom': start.strftime('%d/%m/%Y'),
              'dateTo': end.strftime('%d/%m/%Y' )}
    if fly_to:
        params["fly_to"] = fly_to
    r = requests.get(url, headers={'apikey': secrets.APIKEY}, params=params)
    logger.info("%s => %s", r.request.url, r.status_code)
    r_json = r.json()
    flights = r_json['data']
    result = []
    for flight in flights[:5]:
        local_departure = to_il_from_string(flight['route'][0]['local_departure'])
        result.append({
            'price': '{} {}'.format(flight['price'], r_json['currency']),
            'to': flight['cityTo'],
            'departure': local_departure,
            'is_direct': len(flight['route']) == 1

        })
        # dt= result["departure"]
        # dt = datetime.datetime.strptime(f"{dt}", '%Y-%m-%d')
        # result["departure"]=dt
        # dt='{0}/{1}/{2:02}'.format(dt.month, dt.day, dt.year % 100))

    return result


def cheapest():
    result = []
    data = getflight()
    for item in data:
        direct_str = ''  if item['is_direct'] else 'with stops'
        result.append(f'{item["to"]}: {item["price"]} '
                      f'{item["departure"]} {direct_str}')

    return "\n".join(result)


def cheapest_location(location):
    result = []
    for item in data:
        url = item['url']
        if item["cityTo"] == location:
            result.append(f'{item["cityTo"]}: {item["price"]} {item["date"]}'
                          f' <a href="{url}">הזמן</a>')

    return "\n".join(result)


COMMON_DESTINATIONS = ["רומא", "אמסדטרדם", "ניו-יורק", "לוס-אנגלס", "ברצלונה",
                       "ברלין", "פאפוס", "קוס", "הונג-קונג"]


COMMON_DESTINATIONS_DICT = {
    'tel_aviv': {
        'name': 'תל אביב',
        'code': 'TLV',
        'value': 'tel_aviv'
    },
    'barcelona': {
        'name': 'ברצלונה',
        'code': 'BRC',
        'value': 'barcelona'
    },
    'rome': {
        'name': 'תל אביב',
        'code': 'TLV',
        'value': 'tel_aviv'
    },
    'paphos': {
        'name': 'תל אביב',
        'code': 'TLV',
        'value': 'tel_aviv'
    },
    'tel_aviv': {
        'name': 'תל אביב',
        'code': 'TLV',
        'value': 'tel_aviv'
    },

}


