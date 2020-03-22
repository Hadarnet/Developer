#Guessing game: For two human players#


def mygame():
    num = int(input(f"put your secret numbuer: "))
    print("\n" * 100)

    usernameplayer = input("What the name player: ")

    while True:
        usernum = int(input(f"{usernameplayer} what the number: "))
        if num < usernum:
            print(f"{usernameplayer} Your guess is too high!")
        elif num > usernum:
            print(f"{usernameplayer} Your guess is too low!")
        else:
            print(f"{usernameplayer} Your guess the number you **WIN**")
            break
mygame()
