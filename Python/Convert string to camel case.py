'''Complete the method/function so that it converts dash/underscore
delimited words into camel casing. The first word within the output
 should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).'''

def to_camel_case(text):
    arr = []
    flag = False
    for i in text:
        if i == "-" or i == "_":
            flag = True
            pass
        else:
            if flag:
                arr.append(i.upper())
                flag = False
            else:
                arr.append(i)
    return "".join(arr)