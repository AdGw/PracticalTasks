'''The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string, or ")"
if that character appears more than once in the original string. Ignore capitalization when
determining if a character is a duplicate.'''

from collections import Counter
def duplicate_encode(word):
    arr = []
    word = list(word.lower())
    for i in word:
        for key in Counter(i):
            value = Counter(word)[key]
            if value == 1:
                arr.append(key.replace(i, '('))
            else:
                arr.append(key.replace(i, ')'))
    return "".join(arr)

res = duplicate_encode("dwwqA()0@")
print(res)