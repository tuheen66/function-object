/* function add(x, y) {
  console.log(x, y);
  sum = x + y;
  return sum;
}

var num1 = 4;
var num2 = 5;
var total = add(num1, num2);
console.log(total);
 */


// function to calculate the sum of numbers from an array
function sumArrayNumbers(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = +numbers[i];
  }

  return sum;
}

result = sumArrayNumbers([4, 5, 2, 6]);
// console.log(result);

var myPhone = {
  brand: "Shaomi",
  price: 2000,
  android: 10,
  memory: 64,
  camera: "10MP",
};

var brand = myPhone.brand;
// console.log(brand);
// console.log(myPhone);

var property = Object.keys(myPhone); // to get all the property names as an array

var values = Object.values(myPhone); // to get all the values as an array
// console.log(property);
// console.log(values);

var myMobile = {
  brand: "Shaomi",
  price: 2000,
  android: 10,
  memory: 64,
  camera: "10MP",
};

// console.log(myMobile);

for (i = 0; i < 5; i++) {
  var propertyNames = Object.keys(myMobile);
  var valueNames = Object.values(myMobile);
  var myShaomi = propertyNames[i] + " : " + valueNames[i];
  console.log(myShaomi);
}

for (var propertyName in myMobile) {
  var values = myMobile[propertyName];
  //   console.log(propertyName, ": ", values);
}

function averageValue(a, b, c) {
  var avg = (a + b + c) / 3;
  return avg;
}

var average = averageValue(2, 3, 4);
// console.log("average is", average);

var arr = [2, 3, 4, 5, 6];
var sum = 0;
function make_avg() {
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    // console.log(sum);
  }

  var avg1 = sum / arr.length;
  return avg1;
}

// console.log("average is ", make_avg());

function oddEven(x) {
  if (x % 2 === 0) {
    return "the number is an even number";
  } else {
    return "the number is an odd number";
  }
}

// console.log(oddEven(6));

var signal = "green";

switch (signal) {
  case "red":
    console.log(" Stop!! You can't cross now");
    break;
  case "yellow":
    console.log("stop, you should wait for the green light to cross the road");
    break;
  case "green":
    console.log(" yeee!!, it's safe, let's cross the road now,");
    break;
}
