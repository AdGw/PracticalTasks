'''Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, function should returns 0'''

def sequence_sum(begin, end, step):
    arr = []
    if begin > end:
        return 0
    while begin <= end:
        arr.append(begin)
        begin = begin + step
    return sum(arr)
sequence_sum(2, 6, 2)
