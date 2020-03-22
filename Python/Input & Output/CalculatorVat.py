# Get price from User And use output VAT#

# -----------------------------------
Name = input("What is the product name?")
price = float(input("What is the price in NIS (without V.A.T)? "))
price_total = price * 1.17
VAT = price * 0.17
# -----------------------------------

print(f"The price of{Name} is {price} NIS + {VAT} VAT = {price_total} TOTAL ")

