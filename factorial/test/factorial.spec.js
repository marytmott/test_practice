const assert = require('assert');
const factorial = require('../factorial');

describe('factorial function', function() {

  it('returns a number', function() {
    assert(!isNaN(factorial(90)));
  });

  it('should throw if the argument is less than 1', function() {
    assert.throws(function() { factorial(-Infinity) }, RangeError);
  });

  it('should throw if argument is 0', function() {
    assert.throws(function() { factorial(0) }, RangeError);
  });

  it('should not throw if argument is greater than 0', function() {
    assert.doesNotThrow(function() { factorial(1) });
  });

  it('should return 1 if argument is 1', function() {
    assert.equal(factorial(1), 1);
  });

  it('should return the factorial of a number', function() {
    assert.equal(factorial(10), 3628800);
  });
});