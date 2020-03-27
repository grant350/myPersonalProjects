
var http = require("http");
var os = require("os");
var path = require("path");
var express = require("express");




var app = express();


app.get("/", function(req,res){

res.send("hello this is a express server:2400 ")
console.log("2400 is a go");






});
app.listen(2400,function(){
console.log("There was no error in the express app, express server running on port 2400")
 });






var server = http.createServer(function (req,res){
res.writeHead(200)
res.end("this is a http server")

console.log("have accessed the 2300 page")
}).listen(2300)
console.log("Done, running on port 2300 ")

