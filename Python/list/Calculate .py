import statistics

input_string = input("Enter a list numbers or elements separated by space: ")
userList = input_string.split()
print("user list is ", userList)

print("Calculating element of input list")
sum = 0
median = statistics.median(userList)
for num in userList:
    sum += int(num)
    lenl = len(num)
    maxl = max(userList)
    minl = min(userList)
    avg = sum / len(num)
    madian = statistics.median(num)

print("Sum = ", sum)
print(f"item:{lenl}")
print(f"max:{maxl}")
print(f"min:{minl}")
print(f"avg:{avg}")
print(f"median:{median}")
