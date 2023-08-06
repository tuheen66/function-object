const numbers = [15, 12, 45, 56, 78, 36, 43, 52];

const partial = numbers.slice(2, 5); // to take a copy of elements from index 2 until the index 5 (excluding 5 - meaning index 2, 3, 4 will be copied)

console.log(partial);
console.log(numbers); // original array is not changed
