const numbers = [15, 12, 45, 56, 78, 36, 43, 52];
const newNumbers = [15, 12, 45, 56, 78, 36, 43, 52];


// cut from the original array, starting index and then number of elements
const partial = numbers.splice(3, 3); 


// cut from the original array, starting index,  and then number of elements,  and then more numbers can be added to replace the removed numbers
const newPartial = newNumbers.splice(2, 3, 99, 100, 400); 

console.log("New partial ", newPartial); // returns the deleting items
console.log("New numbers ", newNumbers); // original array gets changed

console.log("Partial ", partial); // returns the copied items
console.log("Numbers ", numbers); // original array gets changed
