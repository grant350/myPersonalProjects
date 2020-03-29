import json;
import zlib;
import base64;
import os;
import binascii
import gzip

data={}
with open("message.enc", 'r') as fh:
        raw = fh.read()
        raw2 = fh.read()
        raw2.strip()
        print('Read %d byte message', len(raw))

        if raw:
            print('base64-decoding and zlib decompressing message')
            raw = zlib.decompress(base64.b64decode(raw))
            if ( os.path.exists("./json_dump_file.txt") ):
                with open("json_dump_file.txt", 'wb') as fh:
                    fh.write(raw)
                    print(raw)
                    fh.close()
                userinput=input("would you like to make this your final copy?: yes|no ")
                if (userinput == "yes" or userinput == "Yes"):
                    with open("FinalMessage.json", 'wb') as fh:
                        fh.write(raw)
                        fh.close()
        data = json.loads(raw)
        print('Loaded message JSON')
