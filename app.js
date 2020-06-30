const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
// const player = require('play-sound')(opts = {})
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const morgan = require("morgan");

//Middleware to output requests to log
app.use(morgan(':date[web] :method :url :status :res[content-length] - :response-time ms'));

//serve files from app folder
app.use(express.static('app'));

//To read incoming JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Do stuff on post
app.post('/', function(req, res){

  //grab variables from incoming JSON
  var fullrequest = req.body;
  var tag         = req.body.tag;
  var firstname   = req.body.contact.first_name;
  var lastname    = req.body.contact.last_name;
  var email       = req.body.contact.email;

  var measureMsg  = " har lige bestilt en opmåling!";
  var brochureMsg = " har bestilt et inspirationskatalog!"

  //do stuff on POST
  console.log(fullrequest);
  console.log("contact email: " + email + "tag: " + tag);


  if (tag === "bestilt opmåling") {
    io.sockets.emit('update-msg', { data: email + measureMsg});
  }
  else if (tag === "email katalog") {
    io.sockets.emit('update-msg', { data: email + brochureMsg});
  }
  else
  io.sockets.emit('update-msg', { data: "INVALID TAG VALUE IN JSON"});

});


server.listen(port, () => console.log(`Listening on port ${port}!`))
