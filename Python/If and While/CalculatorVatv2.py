# Get product str from User And output price whit vat else print no vat #


# -----------------------------------
name = input("What name of product? ")
price = float(input("what the price of product? "))
unit = input("If the price not includes VAT enter 'n' (or otherwise anything else): ")

if unit.lower() == "n":
   print(f"The price of{name} is {price} NIS + {0.17*price:.2f} VAT = {1.17*price:.2f} TOTAL ")
else:
   print(f"The price of{name} is {price} NIS + {price-0.83*price:.2f} VAT, original price {0.83*price:.2f} TOTAL ")
# -----------------------------------
