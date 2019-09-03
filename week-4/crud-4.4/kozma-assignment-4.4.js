// Header file output
var header = require("../../kozma-header")
console.log(header.display("Keith" , "Kozma", "Assignment 4.2") + '\n')
/*
============================================
; Title:  Assignment 4.4
; Author: Keith Kozma
; Date:   2 September 2019
; Description: This application demonstrates CRUD operations within
; Node.js's API.
;===========================================
*/

// Required modules for Express, HTTP, and Morgan
var express = require("express");
var http = require("http");
var logger = require("morgan");

// Stores the Express application
var app = express();
app.use(logger('dev'));

// Invokes get request
 app.get("/", function(req, res){
   res.send("API invoked a successful HTTP GET request");
 });

 // Invokes put request
 app.put("/", function (req, res) {
   res.send("API invoked a successful HTTP PUT request");
 });

 // Invokes post request
 app.post("/", function (req, res) {
   res.send("API invoked a successful HTTP POST request");
 });

 //Invokes delete request
 app.delete("/", function (req, res) {
   res.send("API invoked a successful HTTP DELETE request");
 });

 //Server creation and hosting on port 8080
 http.createServer(app).listen(8080, function () {
   console.log("Application started and listening on port 8080");
 });
