var header = require("../../kozma-header")
console.log(header.display("Keith" , "Kozma", "Assignment 6.3") + '\n')
/*
============================================
; Title:  Assignment 6.3
; Author: Keith Kozma
; Date:   13 September 2019
; Description: This application demonstrates how to connect to mongoDB.
;===========================================
*/
// require
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongoDB = "mongodb+srv://kozmak:IOIw0WbYnDtsE24t@buwebdev-cluster-1-oyje0.mongodb.net/test";
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', function() {
  console.log('Application connected to mLab');

});
var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5050, function (){
  console.log('Application has started and is listening on port 5050');

});
