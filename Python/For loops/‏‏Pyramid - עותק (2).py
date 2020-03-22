for i in range(1, 201):
    n = str(i)
    if i % 7 == 0 or "7" in n:
        print("<!>", end="|")
    else:
        print(i, end="|")
    if i % 10 == 0:
        print()
