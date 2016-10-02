const assert = require('assert');
const fibonnaciGen = require('../fibonnaciGen');

describe('fibonnaci generator', function() {
  const fibIter = fibonnaciGen(8);

  it('should return an iterator', function() {
    const iterator = typeof [Symbol.iterator];

    assert.deepEqual(typeof fibIter, iterator);
  });

  it('should throw if the argument is less than 1', function() {
    function throwGen() {
      // you actually have to call the generator for it to throw
      for (let val of fibonnaciGen(0)) {
        console.log(val);
      }
    }

    assert.throws(throwGen, RangeError);
  });

  it('should return the correct number sequence', function() {
    const correctSequence = [1, 1, 2, 3, 5, 8, 13, 21];
    let currFibIteration = fibIter.next();

    for (i = 0; i < correctSequence.length; i++) {

      assert.deepEqual(currFibIteration.value, correctSequence[i]);

      currFibIteration = fibIter.next();
    }

    // the iterator should be exhausted at this point as well
    assert(currFibIteration.done, 'The fibGen iterator is not exhausted.');
  });
});