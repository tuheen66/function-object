function isInteger(number) {
  if (typeof number !== "number") {
    return "please provide a valid number";
  }

  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isInteger("num"));
