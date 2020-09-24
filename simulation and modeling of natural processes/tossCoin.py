# Simple examaple of monte-carlo method to deduce the probability to toss a coin 4 times and get 3 tails and 1 head

from random import randint

succes = 0
attempts = 10000

for i in range(attempts):
    if randint(0, 1)+randint(0, 2)+randint(0, 1)+randint(0, 1) == 3:
        succes += 1

print("Number of attempts=", attempts)
print("Number of succes=", succes)
