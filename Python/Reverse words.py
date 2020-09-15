'''Complete the function that accepts a string parameter,
and reverses each word in the string. All spaces in the string should be retained.'''

def reverse_words(text):
    splited_txt = text.split(' ')
    arr =[]
    for i in splited_txt:
        reversed = i[::-1]
        arr.append(reversed)
    return " ".join(arr)
reverse_words("double  spaced  words")