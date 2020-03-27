import os;
import getpass
username = getpass.getuser()
print(username)
default_location = os.chdir("/Users/username/desktop")
PRINT('please enter file name or names when done type Done or done')
print("how many repeated files do you want to make? example: x1.txt x2.txt " )
repeat = input("enter a number or leave blank to skip")

if (repeat == 0 or repeat == ""):
    list=[]
    def files():
        filename=input("enter filename:")

if (repeat != 0 or repeat.length >= 1):
    list=[]
    i=0

    def files():
        print("where do you want these files? drag drop folder or leave blank for desktop then press enter")
        filelocation=input("filelocation:")
        if (filelocation == "" or filelocation.length < 2):
            filelocation = default_location
        else:
            filelocation = filelocation;
    while (filename.toLowercase != "done")
        filename=input("type done or enter filename:"+i )
        if (filename.toLowercase == "done" or filename == "" ):
