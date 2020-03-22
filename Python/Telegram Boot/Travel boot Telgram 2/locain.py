import json

import requests
import secrets

url = 'https://kiwicom-prod.apigee.net/'


r = requests.get(url, headers = {'apikey':secrets.APIKL})


with open("loc.json", "w") as fh:
    json.dump(r.json(), fh, indent=4)

print(r)
