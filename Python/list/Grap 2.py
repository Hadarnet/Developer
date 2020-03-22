data = [
    10,
    3,
    2,
    16,
    8,
    3,
    7,
    9,
    12,
    16,
    0,
    4,
    10,
]


for n in data:
    if n == max(data):
        print(n * "x")
    else:
        print(n * "-")
