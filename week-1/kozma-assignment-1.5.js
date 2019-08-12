// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 1.5") + '\n')
/*
============================================
; Title: Assignment 1.5
; Author: Keith Kozma
; Date: 11 August 2019
; Description: This is a simple program which demonstrates the
; use of running a local server on Node through the CLI.
;===========================================
*/
var http = require("http");

function processRequest(req, res) {
var body = "Fugit laudantium so illo cupidatat eum. Adipisci incidunt or molestiae rem consequuntur, mollit. Nulla eiusmod consequat dicta rem but pariatur. Nisi illum. Mollit ut quisquam consequuntur in unde nequeporro. Aliquip aute consequat, est. Esse. Incididunt si cillum cillum.";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);
