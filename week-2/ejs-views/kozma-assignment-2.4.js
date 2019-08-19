// Header file output
var header = require("../../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 2.4") + '\n')
/*
============================================
; Title: Assignment 2.4
; Author: Keith Kozma
; Date: 18 August 2019
; Description: This program utilizes Express to send and receive a request through a Node.js server.
;===========================================
*/
//Setting up variables for server execution
var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

//locates file within the .ejs file within the views folder
app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

app.get("/", function(req, res)
{
  res.render("index",{
    firstName : "Keith",
    lastName : "Kozma",
    address : "California"
  });
});
//Creates server and outputs to localhost on port 8080
http.createServer(app).listen(8080, function()
{
  console.log("EJS-Views app started on port 8080.");

});
