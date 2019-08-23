// Header file output
var header = require("../../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 3.3") + '\n')
/*
============================================
; Title: Assignment 3.3
; Author: Keith Kozma
; Date: 23 August 2019
; Description: This program creates a server and logs the product ID on the .ejs div container within the webpage.
;===========================================
*/
//Creating the required library statements and assigning express to the app variable
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

//Sets the directory to locate the .ejs file
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

//This creates a request to listen for anything that comes after the /
app.get('/:productId', function(req, res){
  var productId = parseInt(req.params.productId, 10);

  res.render('index', {
    productId: productId
  });
});

//Creates the server on port 3001
http.createServer(app).listen(3001, function(){
  console.log('Application started and listening on port %s', 3001);
});
