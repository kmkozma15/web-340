var header = require("../../../kozma-header");
console.log(header.display("Keith", "Kozma", "Exercise 7.2") + '\n');

/*
============================================
; Title:  kozma-exercise-7.2.js
; Author: Keith Kozma
; Date:   20 September 2019
; Description: This TDD application is used to demonstrate
; how mocha and chai are used to test code.
;===========================================
*/

var assert = require("assert");

describe("String#split", function() {
	it("should return an array of fruits", function() {
		assert(Array.isArray("Apple,Orange,Mango".split(",")));
	});
});
function getFruits(str) {
	return str.split(",");
}
module.exports = getFruits;
