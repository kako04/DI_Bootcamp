import random
from re import L
a= input("give string 10 characters long: ")
if len(a) > 10:
    print("string too long")
elif len(a) < 10:
    print("string not long enough")
else:
    print(a[0], a[-1])
    for i in range(1, len(a)+1):
        print(a[0:i])
    l = list(a)
    random.shuffle(l)
    shuffled = ''.join(l)
    print(shuffled)