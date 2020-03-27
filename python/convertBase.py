def convertbase(base):
    turns =0
    rem_array=[]
    while turns <=25 or Int != 'exit':
        turns +=1
        while True:
            Int = str(input('please put in a number type exit to exit:'))
            if(Int == 'exit' ):
                print( 'test ' + str(Int))
                return False
            Int = int(Int)
            while Int !=0:
                new_int = Int//base
                rem = Int %base
                rem_array.insert(0,rem)
                print(new_int,rem)
                Int = new_int
            new_array = "".join(map(str,(rem_array)))
            print(new_array)
            print (rem_array)
            del rem_array[0:100]
converter = convertbase(8)

'''del rem_array[0:100]'''
