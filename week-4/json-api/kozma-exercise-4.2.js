// Header file output
var header = require("../../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 4.2") + '\n')
/*
============================================
; Title: Assignment 4.2
; Author: Keith Kozma
; Date: 30 August 2019
; Description: This program creates a server and logs the requests made in the console window.
;===========================================
*/
//Creating required library statements and assigning express to variable
var express = require('express');
var http = require('http');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.get('/customer/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);
  res.json({
    firstName: 'Leo',
    lastName: 'Tolstoy',
    employeeId: id
  });
});

http.createServer(app).listen(3000, function () {
  console.log('Application started and listening on port 3000');

})
