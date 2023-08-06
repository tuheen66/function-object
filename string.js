let str =
  "My name is Monirul Hassan. The name of my country is Bangladesh. I love my country very much.";

let lowerCase = str.toLowerCase(); // to convert a string into all lower case
let upperCase = str.toUpperCase(); // to convert a string into all upper case
// console.log(lowerCase);
// console.log(upperCase);

let str1 = lowerCase.includes("monirul"); // to find some string inside a larger string
// console.log(str1);

let str2 = "hassan";
let indexOfHassan = lowerCase.indexOf(str2); // to find the starting index of a substring
// console.log(indexOfHassan);

let str3 = "Monirul";
let startsWith = str3.startsWith("M"); // etermines whether a string begins with the characters of a specified string,
// console.log(startsWith);

let str4 = "Hassan";
let endsWith = str4.endsWith("n"); //determines whether a string ends with the characters of a specified string
// console.log(endsWith);

// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
let str5 = lowerCase;
let splitArray = str5.split(" ");
// console.log(splitArray);

let splitChar = str5.split("");
// console.log(splitChar);

//  "My name is Monirul Hassan. The name of my country is Bangladesh. I love my country very much.";

// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
let sliceArray = str5.slice();
// console.log(sliceArray);

let str6 = [
  "My name is Monirul Hassan",
  "The name of my country is Bangladesh",
  "I love my country very much.",
];

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

let newStr = str6.join(" - ");
// console.log(newStr);

//console.log(str.length);


