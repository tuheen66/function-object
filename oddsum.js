let arr = [2, 5, 6, 7, 9, 3, 12];
let sumOdd = 0;
let sumEven = 0;
let oddSum = function (n) {
  for (i of n) {
    if (i % 2 != 0) {
      sumOdd += i;
    } else {
      sumEven += i;
    }
  }
  return {
    addOdd: sumOdd,
    addEven: sumEven,
  };
};

let add = oddSum(arr);
console.log(add);
