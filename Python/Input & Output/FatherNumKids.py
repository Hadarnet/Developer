# Get Data from User And use f"" to Output#

# -----------------------------------
name = input("What is the name of the father?")
sons = input("How many sons he has?")
daughters = input("How many daughters he has?")
s = f"{name.capitalize()} has {int(sons) + int(daughters)} kids."
# -----------------------------------

print(s)

