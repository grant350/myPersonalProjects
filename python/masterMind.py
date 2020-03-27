import random;
hot_spot=0;
colors = ['R','G','B','O','P']
other_colors =['RED','GREEN','BLUE','ORANGE','PURPLE']


def code_maker():
    code_maker_array=[]
    for i in range(4):
        ran = random.randint(0,4)
        print (ran)
        code_maker_array.append(colors[ran])
        print(code_maker_array)
    return code_maker_array
the_code = code_maker()


def code_breaker(trys):
    guesser_array=[]
    for i in range(4):
        while True:
            cbi = input('please put in r,g,b,o,p or red,green,blue,orange,purple_ ')
            cbi = cbi.upper()
            print (cbi)
            if (isinstance(cbi,str) == True):
                print('is a string')
                if (cbi in colors or cbi in other_colors):
                    guesser_array.append(cbi)
                    print (cbi)
                    print (guesser_array)
                    break;
        else:
            print('there was an error processing your input')

    print('you have completed a set')
    print ('your number of trys are ' + str(trys))
    return True;




def code_checker(x):

code_checker()


def trys():
    trys=1
    while (trys != 6):
        code_breaker(trys)
        trys+=1
        print('trys = '+str(trys))
    if (trys ==6):
        print('game over')
        return False;
trys = trys()
