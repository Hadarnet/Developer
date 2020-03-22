n = 100

for i in range(10, n):
    if i % 10 == 0 and i !=10:
        print()
    if i % 7 == 0:
        print("xx", end="|")
    else:
        print(i, end="|")