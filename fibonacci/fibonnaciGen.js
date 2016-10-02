function* fibonnaciGen(howManyNums) {
  if (howManyNums < 1) {
    throw new RangeError('Number must be greater than 0.');
  }

  let count = howManyNums;
  let num1 = 0;
  let num2 = 1;
  let tempNum;

  while(count > 0) {
    yield num2;
    tempNum = num1;
    num1 = num2;
    num2 = tempNum + num2;
    count--;
  }
}

module.exports = fibonnaciGen;