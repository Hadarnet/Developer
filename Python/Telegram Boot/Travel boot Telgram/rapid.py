import json

import requests
import secrets

url = 'https://kiwicom-prod.apigee.net/v2/search'

params = {'fly_from': 'TLV', 'dateFrom': '27/01/2020', 'dateTo': '27/02/2020'}

r = requests.get(url, headers = {'apikey':secrets.APIKEY},params=params)


# with open("f.json", "w") as fh:
#     json.dump(r.json(), fh, indent=4)

print(r)
