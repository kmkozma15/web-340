// require
var express = require('express');
var http = require('http');
var path = require('path');

//app functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//local composer array
var composers = [
  "Bach",
  "Mozart",
  "Beethoven",
  "Verdi"
];

//routes
app.get('/', function (req, res) {
  res.render('index', {
    names: composers
  });
});

//create server
http.createServer(app).listen(3001, function () {
  console.log('Application has started and is listening on port 3001');

});
