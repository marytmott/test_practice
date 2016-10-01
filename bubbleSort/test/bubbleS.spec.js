const bubbleS = require('../bubbleS').bubbleS;
const assert = require('assert');

describe('bubble sort', function() {
  const testArr = [0, 100, 29, 50, -1, 30];

  it('should return an array', function() {

    assert(Array.isArray(bubbleS(testArr)));
  });

  it('should sort an array', function() {
    const correctSort = [-1, 0, 29, 30, 50, 100];

    assert.deepEqual(bubbleS(testArr), correctSort);
  });
});