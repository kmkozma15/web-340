var assert = require("assert");

describe("String#split", function () {
  it("should return an array of fruit", function () {
    assert(Array.isArray('Pear, Kiwi, Grape'.split(',')));
  })
})

// Running the test function
function getFruits(str) {
  return str.split(',');
}

module.exports = getFruits;
