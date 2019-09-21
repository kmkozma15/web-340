
var header = require("../../../kozma-header");
console.log(header.display("Keith", "Kozma", "Exercise 7.3") + '\n');

/*
============================================
; Title:  kozma-exercise-7.3.js
; Author: Keith Kozma
; Date:   20 September 2019
; Description: This TDD application is used to demonstrate
; how mocha and chai are used to test code.
;===========================================
*/

var fruits = require("../fruits");
var chai = require ("chai");
var assert = chai.assert;

describe("fruits", function () {
  it("should return an array of fruits", function () {
    var f = fruits('Apple, Orange, Mango');
    assert(Array.isArray(f));
  })
})
