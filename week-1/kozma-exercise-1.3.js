// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Exercise 1.3") + '\n')
/*
============================================
; Title: Assignment 1.3
; Author: Keith Kozma
; Date: 11 August 2019
; Description: This is a simple program which demonstrates the
; use of Node modules and outputs the information through console.log.
;===========================================
*/

var url = require('url');

var parsedURL = url.parse('https://www.generatedexample.com/profile?name=Keith');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

