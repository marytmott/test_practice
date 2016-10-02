function factorial(num) {

  if (num < 1) {

    // throw new RangeError('Number value must be greater than 0.');
  }

  return _factorialHelper(num);
}

function _factorialHelper(currNum, currTotal = 1) {

  if (currNum === 1) {
    return currTotal;
  }

  return _factorialHelper(currNum - 1, currTotal * currNum);
}

module.exports = factorial;