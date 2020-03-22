import statistics
def median(data):
    # ------ YOUR CODE HERE -------
    data.sort()
    lenl = int(len(data))
    med = statistics.median(data)
    maxl = max(data)
    minl = min(data)
    avg = sum(data) / len(data)


    print(f"item:{lenl}")
    print(f"max:{maxl}")
    print(f"min:{minl}")
    print(f"avg:{avg}")
    return data

    # -----------------------------



result = median([10, 15, 20, -40, 90])
print(result)
assert result == 15

result = median([10, 15, 20, -40, 90, 33])
print(result)
assert result == 17.5

print("OK")


