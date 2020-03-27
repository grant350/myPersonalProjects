var md5 = require('./node_modules/md5');
var final_random_array= []
var final_hash_array= []

var x= "541576289"
var length = x.length;
console.log(length)
var values = []
var z= 0;
var t=0;
for(z=1; z<= length; z++){
var splits = x.slice(z-1,z)
values.push(splits)
}
console.log(values)
var newx = md5(x)

var text= "fwonffoiangoiuegvu0buc0acu8easuhgie3092r830mchcisf802fo3nf93f348fn9cfeh8mhfwm8fhw89mahcwoehef"


var list= '{"a":"3", "b":"3", "c":"32", "d":"a3", "e":"v3", "f":"4c", "g":"38", "h":"v", "i": "x", "j": "3bc", "k":"sdf", "l":"3vx" ,"m":"ht", "n":"3jyr", "o":"gea", "p":"jtj", "q":"vas","r":"hrs", "s":"ega", "t":"jyt", "u":"age", "v":"bdv", "w":"bdfev", "x":"bgeagadv", "y":"bfesdv", "z":"bdfafse", "1":"bdbdsbv", "2":"besgdv", "3":"bvsvedv", "4":"bdohifev", "5":"bdfsfv", "6":"befwlfwdv", "7":"bfeafdv", "8":"bddbsv", "9":"bdrgrgv"}'
var nlist = JSON.parse(list);
  console.log(nlist)

var lastarray=[]
var random_array = []

var i=0;
for (i=0; i<= length; i++){
  console.log("made itts")
  var letter= values[i]
  console.log(letter + " letter ");

  for (items in nlist){
    console.log("made it")
    var item = nlist[items]
  if( items == letter){
  console.log(item + "hi")
      lastarray.push(item)
  }}

  var random = Math.floor(Math.random() * 100)
  console.log("random " + random)
  var random2 = random-1
  var luis= text.slice(random2,random)
  random_array.push(luis)
  lastarray.push(luis)
  console.log(random_array + " iiiiiiii")
  random_array= random_array.join("")

}

new_array= lastarray.join("")
final_array_hash.push(new_array)
final_array_random.push(new_array)

console.log(lastarray + " lastarray");
