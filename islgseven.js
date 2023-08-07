function isLGSeven(num) {
  if (typeof num !== "number") {
    return "please provide a valid number";
  } else {
    if (num - 7 < 7) {
      let result = num - 7;
      return result;
    } else {
      result = num * 2;
      return result;
    }
  }
}

console.log(isLGSeven( ));
