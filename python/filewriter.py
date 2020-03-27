import os;
retval = os.getcwd()
os.chdir(retval);
print("type your favorite animal")
animal= raw_input(":");
print("type a paragraph on why our business rules")
paragraph= raw_input(":");

index=0;

for i in range(0):
    index+=1;
    index = str(index)
    data="haha you go tricked lol"
    f = open(animal+index+".txt","w+")
    f.write(data)
    f.close()
    print("haha gotch ya")
