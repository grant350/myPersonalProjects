var http = require("http"),
  fs = require("fs"),
  express = require("express"),
  mysql = require("mysql"),
  //morgan = require('morgan'),
  bp = require("body-parser"),
  //cookieParser = require("cookie-parser"),
  connect = require("connect"),
  bcrypt = require("bcrypt"),
  md5 = require('md5')
const saltRoundsHashes = 12;



var saltRounds="did not work",
 username="did not work",
 password="did not work"
console.log(username + " " + password + " " + saltRounds)

// console.log(md5('message'));

// sql connection

// md5 checker

// require the  username and password

// express
// app useability
//EX:
//morgan('tiny')
//morgan(':method :url :status :res[content-length] - :response-time ms')


var app = express();

var uep = bp.urlencoded({
  extended: false
})
var jsonParser = bp.json()
app.use(express.static("static"))
// end of requires
//start of static files excluding server.js
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/static/index.html")
});

app.post("/people", function(req, res) {
  var node = req.body.senddataString.Password
 password = req.body.senddataString.data[1]
 username = req.body.senddataString.data[0]
if (node === 'NodeSender12'){
console.log("worked");
//hash();
}else{
  console.log("error password is incorrect from client")
// return error to client
}
  res.send(body)
})


app.get("/people", function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.write("<b>some data</b>" +  "<script>console.log(\'hello\')</script>")
  res.end()

})

// POST /api/users gets JSON bodies



/*

function hash(){

bcrypt.genSalt(saltRoundsHashes,function (err,salt){


bcrypt.hash(password, salt, function(err, hash) {
console.log(hash)
        // Store hash in your password DB.
    });
    bcrypt.hash(username, salt, function(err, hash) {
    console.log(hash)
            // Store hash in your password DB.
        });
})
}hash()

var sqldata = `INSERT INTO passwords (Passcode, SaltRounds, Username) VALUES ('${password}','${username}','${saltRounds}')`
console.log(sqldata)

var sqlq = mysql.createConnection({
host: "35.192.88.120",
  user: "jack",
  password: "Popcorn!1",
database: "shit"
})

sqlq.connect(function(err) {
  console.log("Connected!");

  sqlq.query(sqldata, function (err, result) {
    console.log(result)

  });
});

*/
app.listen(3000, function() {
  console.log("server started on 3000 server static files from node, connection waiting......")
})
