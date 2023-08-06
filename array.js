const numbers = [15, 12, 45, 56, 78, 36, 43, 52];
const names = ["monir", "hassan", "shadman"];

const isItArray = Array.isArray(numbers); // to check whether it is an array or not
// console.log(isNumber);

const isItIn = numbers.includes(45); // to find whether an item is in the array

// console.log(isItIn);
const newArray = numbers.concat(names); // to join two arrays together to form a new array
// console.log(newArray);

// to check with index number
if (numbers.indexOf(45) !== -1) {
  // console.log(true);
} else {
  //   console.log(false);
}
