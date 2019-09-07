//require statments
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

//route
app.get('/', function (req, res) {
  res.render('index', {
    message: 'It is not about who you know that matters. What really matters is who knows you.'
  })
})

// create server
http.createServer(app).listen(8000, function() {
  console.log('Application has started and is running on port 8000');

});
