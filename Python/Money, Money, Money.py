'''Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest
Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.'''

P = 1000
I = 0.05
T = 0.18
D = 1100


def calculate_years(P, I, T, D):
    counter = 0
    if D == P:
        return 0
    while P <= D:
        after_year = P * (I + 1)
        tax = (after_year - P) * T
        sum_year = after_year - tax
        P = sum_year
        counter += 1
        if P >= D:
            return counter

calculate_years(P, I, T, D)
