from collections import Counter

def check_words(filename, tests):
    c = {k: 0 for k in tests}
    with open(filename) as f:
        for line in f:
            s = line.strip()
            if not s:
                continue  # skip blank lines
            for name, func in tests.items():
              if func(s):
                c[name] += 1
    return c
VOWELS = set("aeiou")
word_tests = {
        "Words with more than 3 letters": lambda w: len(w) > 3,
        "Words with more than 5 letters": lambda w: len(w) > 5,
        "Words with the letter x": lambda w: 'x' in w,
        "Words with the letter is lower": lambda w: w.islower(),
        "Words start letter vowel": lambda w: w[0] in "aeiou",
        "Words end letter vowel": lambda w: w[-1] in "aeiou",
        "All word": lambda w: True,
        "No word": lambda w: False,
        "Words with opp": lambda w: 'opp' in w,
        "Words with the  all letter vowel": lambda w: all([c in "aeiou" for c in w]),
        "All word": lambda w: set(w) <= VOWELS,

}

# expected = {
#     "Words with more than 3 letters": 108588,
#     "Words with more than 5 letters": 98539,
#     "Words with the letter x": 2699,
#     ........
# }



results = check_words('wordsEn.txt', word_tests)
for k, v in results.items():
    print(k, v)


