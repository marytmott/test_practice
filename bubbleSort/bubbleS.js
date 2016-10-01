function bubbleS(arr) {
  let switched = true;

  while (switched) {
    switched = false;

    for (let i = 0; i < arr.length - 1; i++) {

      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        switched = true;
      }
    }
  }
  return arr;
}

module.exports = bubbleS;