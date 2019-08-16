// Header file output
var header = require("../../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 2.3") + '\n')
/*
============================================
; Title: Assignment 2.3
; Author: Keith Kozma
; Date: 16 August 2019
; Description: This program utilizes Express to send and receive a request through a Node.js server
; and navigate to different requested pages.
;===========================================
*/

var express = require('express');

var http = require('http');

var app = express();

//routes
app.get('/', function(req, res){
  res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res){
  res.end('Welcome to the about page. \n');
});

app.get('/contact', function(req, res){
  res.end('Welcome to the contact page. \n');
});

app.use(function(req, res){
  res.statusCode = 404;
  res.end('404!\n');
})

http.createServer(app).listen(3000, function(){
  console.log('Application started on port %s', 3000);

});
