// Header file output
var header = require("../../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 2.2") + '\n')
/*
============================================
; Title: Assignment 2.2
; Author: Keith Kozma
; Date: 15 August 2019
; Description: This program utilizes Express to send and receive a request through a Node.js server.
;===========================================
*/

var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res)
{
  console.log('In come a request to: %s', req.url);

  res.end('Hello World\n');
});

http.createServer(app).listen(8080, function()
{
  console.log('Application started on port %s', 8080);
});
