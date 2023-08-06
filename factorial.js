let arr = [1, 2, 3, 4, 5];

let fact = 1;
let factorial = function (n) {
  for (i of n) {
    fact *= i;
  }
  return fact;
};

let factor = factorial(arr);
console.log(factor);


