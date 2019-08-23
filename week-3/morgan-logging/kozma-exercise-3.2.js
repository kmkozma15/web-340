// Header file output
var header = require("../../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 3.2") + '\n')
/*
============================================
; Title: Assignment 3.2
; Author: Keith Kozma
; Date: 23 August 2019
; Description: This program creates a server and logs the requests made in the console window.
;===========================================
*/
//Creating required library statements and assigning express to variable
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

//Sets which directory to view the .ejs file
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

//Creates a get request to listen for any request with a /
app.get('/', function(req, res){
  res.render('index', {
    message: 'Welcome to Exercise 3.2: The Morgan Logger Example!'
  });
});

//Creates a server on port 3000
http.createServer(app).listen(3000, function(){
  console.log('Application started and listening on port %s', 3000);
});
