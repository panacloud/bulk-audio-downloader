import os


def reading():
    mylist = os.listdir()
    print(mylist)
    for i in mylist:
        print(os.path.isdir(i))
        print(os.path.abspath(i))
    return "Hello World file reading done"


reading()