var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var apiUrl = '/api/whoami';

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get(apiUrl, function(req, res){
  var body = {
    language: req.acceptsLanguage()[0],
    software: '',
    ip: req.ip
  };
  body.ip = req.ip;

  res.json(body);
});

app.listen(3000, function(){
  console.log('working');
});
