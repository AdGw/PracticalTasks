'''Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the
missing second character of the final pair with an underscore ('_').'''

def solution(s):
    arr = []
    for i in range(len(s)):
        res = s[i*2:(i*2)+2]
        if len(res) != 0:
            if len(res) == 1:
                arr.append(res+"_")
                break
            arr.append(res)
    return arr