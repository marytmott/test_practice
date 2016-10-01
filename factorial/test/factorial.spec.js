const factorial = require('../factorial').factorial;
const assert = require('assert');

describe('factorial function', function() {

  it('returns a number', function() {
    assert(!isNaN(factorial(90)));
  });

  it('should throw if the initial value is less than 1', function() {
    assert.throws(function() { factorial(-Infinity) }, RangeError);
  });

  it('should throw if the initial value is 0', function() {
    assert.throws(function() { factorial(0) }, RangeError);
  });

  it('should not throw if the initial value is greater than 0', function() {
    assert.doesNotThrow(function() { factorial(1) });
  });

  it('should return 1 if the initial value is 1', function() {
    assert.equal(factorial(1), 1);
  });

  it('should return the factorial of a number', function() {
    assert.equal(factorial(10), 3628800);
  });
});