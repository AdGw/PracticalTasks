def thirt(n):
    arr = [1, 10, 9, 12, 3, 4]
    counter = 0
    arr_sum = []
    arr_sum2 = []
    str_num = list(str(n)[::-1])
    while counter < len(str_num):
        if len(str_num) > len(arr):
            arr = arr * len(str_num)
            _sum = arr[counter] * (int(str_num[counter]))
            arr_sum.append(_sum)
            counter += 1
        else:
            _sum = arr[counter] * int(str_num[counter])
            arr_sum.append(_sum)
            counter += 1
    second_n = sum(arr_sum)
    str_num2 = list(str(second_n)[::-1])
    counter = 0
    while counter < len(str_num2):
        if len(str_num) > len(arr):
            arr = arr * len(str_num)
            _sum = arr[counter] * int(str_num2[counter])
            arr_sum2.append(_sum)
            counter += 1
        else:
            _sum = arr[counter] * int(str_num2[counter])
            arr_sum2.append(_sum)
            counter += 1
    return sum(arr_sum2)

x = thirt(107)
print(x)
