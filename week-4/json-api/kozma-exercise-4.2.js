// Header file output
var header = require("../../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 4.2") + '\n')
/*
============================================
; Title: Assignment 4.2
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

//Creates a get request which listens for anything after the /
app.get('/customer/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);
  res.json({
    firstName: 'Leo',
    lastName: 'Tolstoy',
    employeeId: id
  });
});

//Logs to the client the application starting place and run message
http.createServer(app).listen(3000, function () {
  console.log('Application started and listening on port 3000');

})
