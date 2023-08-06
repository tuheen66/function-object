const result = Math.pow(2, 3); // gives exponential value
// console.log(result);

const num = -70;
const numAbs = Math.abs(num); // gives absolute value
// console.log(numAbs);

const numRound = Math.round(12.45);
// console.log("rounded - ", numRound);

const numFlr = Math.floor(23.45);

const numCeil = Math.ceil(235.47);

// console.log("floored - ", numFlr);
// console.log("ceiling - ", numCeil);

for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  //console.log(random);
}

const numbers = [20, 45, 56, 100, 43, 25, 400];

const largestNumber = Math.max(...numbers);

// console.log("Largest number is - ", largestNumber); // find the largest number, for array need to use '...' to destructure the array to go through the items

// swap with temporary variable

let a = 10;
let b = 25;

// console.log(a, b);

// let temp = a;
// a = b;
// b = temp;

// swap with SWAP
[a, b] = [b, a];
// console.log(a, b);

const jim = 40;
const dela = 50;

if (jim > dela) {
  //console.log(" jim got higher marks");
} else {
  //console.log("dela got higher marks");
}

const max = function (a, b, c) {
  maxNumber = Math.max(a, b, c);
  minNumber = Math.min(a, b, c);
  return {
    numBig: maxNumber,
    numSmall: minNumber,
  };
};

const biggestNumber = max(45, 56, 85);
//console.log(biggestNumber);

const height = [167, 190, 120, 165, 137];

function tallest(h) {
  const mostTall = Math.max(...h);
  return mostTall;
}

function maxInArray(n) {
  let largest = n[0];
  for (i = 0; i < n.length; i++) {
    const element = n[i];
    if (element > largest) {
      largest = element;
    }
  }return largest;
}

console.log(maxInArray(height));
