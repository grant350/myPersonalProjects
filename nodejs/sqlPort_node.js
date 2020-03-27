var http = require("http");
var fs = require("fs");
var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var PORT = 8123
var PORTSQL = 8125
var app = express();
var body = ("body-parser")

app.set("view engine", "ejs");
app.use(express.body())


console.log("will be retrieving data soon and wil grab the sql from the client")

    var con = mysql.createConnection({
      host: "35.193.191.190",
      user: "grant",
      password: "Popcorn!1"

    });
    console.log("mysql has connected");



con.connect(

    var sql = 'INSERT INTO Dates (textboxDateOne) '  (data.DateOne);

con.query(sql , function(result){console.log(result)})
console.log("mysql is created ")
)
