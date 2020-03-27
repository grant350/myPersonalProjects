from bs4 import BeautifulSoup as bs

from urllib.request import urlopen
import os

def url():
    html = urlopen('https://www.cocc.edu/home/student-login.aspx')
    soup = bs(html.read(),'html.parser')
    print('hello')
    print(soup.body)

def directorys():
    a =os.getcwd()
    os.mkdir('candy')
    print(a)
    os.chdir('/users/grant/desktop')
    i=0
directorys()


box = open('package-lock.json','r')
box.read()
str(box)
i=0
while i <= 100:
    print('file made');
    i+=1;
    file = open("newfile "+str(i)+".txt","w")
    file.write(str(box))
    if (i > 100):
        print("i is done with 100 files")

