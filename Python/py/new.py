 import request

 r = request.get("")
 print(r)
 print(len(r.text))
 data = r.json()
 print(len(data))
 pprint(data[14]['aeay_'])