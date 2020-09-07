'''Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
'''

def accum(s):
    arr = []
    counter = 0
    for j in s:
        if j.isupper():
            arr.append(j.upper() + j.lower() * counter)
            x = "-".join(arr)
            counter += 1
        else:
            arr.append(j.upper() + j*counter)
            x = "-".join(arr)
            counter += 1
    return x
text = accum("ZpglnRxqenU")
print(text)