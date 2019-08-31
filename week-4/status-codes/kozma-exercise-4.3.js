// Header file output
var header = require("../../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 4.3") + '\n')
/*
============================================
; Title: Assignment 4.3
; Author: Keith Kozma
; Date: 30 August 2019
; Description: This program demonstrates how to create API which returns JSON data.
;===========================================
*/
//Creating required library statements and assigning express to variable
var express = require('express');
var http = require('http');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

//requests that use status codes

app.get('/not-found', function(req, res) {
  res.status(404);

  res.json({
    error: 'Resource not found.'
  });
});

app.get('/ok', function(req, res) {
  res.status(200);

  res.json({
    error: 'Page has loaded correctly.'
  });
});

app.get('/not-implemented', function(req, res) {
  res.status(5001);

  res.json({
    error: 'Page not yet implemented'
  });
});

http.createServer(app).listen(3000, function() {
  console.log('Application has started and listening on port 3000');

});
