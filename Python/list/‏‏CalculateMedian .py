import statistics

input_string = input("Enter a list numbers or elements separated by space: ")
userList = input_string.split()
print("user list is ", userList)

sum = 0
median = statistics.median(userList)

print(f"median:{median}")
