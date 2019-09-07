// Header file output
var header = require("../../kozma-header")
console.log(header.display("Keith" , "Kozma", "Assignment 5.2") + '\n')
/*
============================================
; Title:  Assignment 5.2
; Author: Keith Kozma
; Date:   6 September 2019
; Description: This application demonstrates the capabilities of an EJS template.
;===========================================
*/
// required variables
var express = require('express');
var http = require('http');
var path = require('path');

//application functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//array of singers
var singers = [
  "Bon Jovi",
  "Madonna",
  "Michael Jackson",
  "Elton John"
];

//routes
app.get('/', function (req, res) {
  res.render('index', {
    names: singers
  });
});

//create server
http.createServer(app).listen(3000, function () {
  console.log('Application has started and is listening on port 3000');

});
