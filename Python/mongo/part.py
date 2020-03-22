from csv import DictReader
from math import radians, cos, sin, asin, sqrt
def find_distance(name):
    def haversine(lon1, lat1, lon2, lat2):
        lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
        dlon = lon2 - lon1
        dlat = lat2 - lat1
        a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
        c = 2 * asin(sqrt(a))
        km = 6367 * c
        return km

    hodayadd @ jce.ac.ila
    def country(country):
        with open('cow.csv', encoding="utf8") as f:
            reader = DictReader(f)
            for d in reader:
                if d["name"] == country.title():
                    return float(d['lon']), float(d['lat'])


    with open('cow.csv', encoding="utf8") as f:
        reader = DictReader(f)
        with open(f"indexx.html", "w") as fw:
            fw.write("<ul>\n")
            for d in reader:
                fw.write("<li>\n")
                fw.write(f"{d['name']}: {round(haversine(country(name)[0], country(name)[1], float(d['lon']), float(d['lat'])), 2)}\n")
                fw.write("</li>\n")
            fw.write("</ul>")

find_distance("israel")