# exercise 1
from re import A


print("hello world "*4 + "i love python "*4)

# exercise 2
a = int(input("input a month 1 to 12: "))
if a<1 or a>12:
    print("that month doesnt exist")
elif a>=3 and a<=5:
    print("spring")
elif a>=6 and a<=8:
    print("summer")
elif a>=9 and a<=11:
    print("autumn")
elif a==12 or a>=1 and a<=2:
    print("winter")