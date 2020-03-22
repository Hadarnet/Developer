import re
def ip4(s):
    num = re.split(r'["."]',s)
    for i in num:
        if int(i.isdigit()):
         print(i)
