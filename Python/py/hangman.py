class Hangman:
    def __init__(self, word):
        self.word = word
        self.guesses = set()

    def status(self):
        s = ""
        for c in self.word:
            if c in self.guesses:
                s += c
            else:
                s += "?"
        return s

    def guess(self, letter):
        if not letter.isalpha():
            raise ValueError(f"fdsfsdfsddf")
            return self.word.count(letter)
