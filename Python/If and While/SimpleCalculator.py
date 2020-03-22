# Simple calc - Get num from User And while sum #

# -----------------------------------
total = 0

while True:
    s = input("please enter a number: ")
    if s == "":
        break;
    total += int(s)
# -----------------------------------
    print(total)
