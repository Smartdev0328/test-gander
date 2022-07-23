
var express = require('express');

var app = express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
require('../backend/router/router')(app);


var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
 
 