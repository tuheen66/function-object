function mindGame(number) {
  if (number <= 0 || typeof number !== "number") {
    return " please provide me with a positive number";
  } else {
    let num = (number * 3 + 10) / 2 - 5;
    return num;
  }
}

console.log(mindGame("hello"));
